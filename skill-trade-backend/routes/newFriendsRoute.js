const express = require("express");
const router = express.Router();

const Friend = require("../models/friend");
const User = require("../models/user");

const {
  checkIfRequestAlreadySent,
  sendFriendRequestToUser,
  acceptFriendRequest,
  denyFriendRequest
} = require("./functions/friends");

router.post("/friend_request/send/:id", async (req, res) => {
  const recipientId = req.params.id;
  const requesterId = req.body.requesterId;

  const newFriend = {
    requester: requesterId,
    recipient: recipientId,
  };

  if (await checkIfRequestAlreadySent(requesterId, recipientId)) {
    return res.status(400).send("User already has friend");
  }

  try {
    const friendRequest = await Friend.create(newFriend);
    const friendRequestId = friendRequest.id;

    const addedFriend = await sendFriendRequestToUser(
      recipientId,
      friendRequestId
    );

    return res.status(201).json({
      msg: "Success: friend request sent",
      newFriend: addedFriend
    });
  } catch (err) {
    return res.status(500).json({
      msg: "Unknown error occured",
      err
    });
  }
});

router.post("/friend_request/respond", async (req, res) => {
  const { id: friendRequestId, accept: userResponse } = req.query;

  if (!friendRequestId) return res.status(400).json('ID query parameter not included');

  if (userResponse === 'true') {
    const { updatedRequester, updatedRecipient } = await acceptFriendRequest(friendRequestId);
    
    return res.status(201).json({
        msg: "Success: friend added, request deleted from recipient's document",
        updatedRequester,
        updatedRecipient
    })
  } else if (userResponse === 'false') {
    const updatedRecipient = await denyFriendRequest(friendRequestId);
    
    return res.status(200).json({
        msg: "Success: Friend request denied, request deleted from recipient's document",
        updatedRecipient
    })
  } else {
      return res.status(400).json('User response query parameter not included');
  }
});

module.exports = router;
