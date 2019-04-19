const express = require('express');
const router = express.Router();

const Friend = require('../models/friend');
const User = require('../models/user');

const {
    checkIfUserHasFriend,
    sendFriendRequestToUser
} = require('./functions/friends')

router.post('/friend_request/:id', async (req, res, next) => {
    const recipientId = req.params.id;
    const requesterId = req.body.requesterId;

    const newFriend = {
        requester: requesterId,
        recipient: recipientId,
        status: null
    }

    if (await checkIfUserHasFriend(requesterId, recipientId)) {
        return res.status(400).send('User already has friend');
    }

    try {
        const friendRequest = await Friend.create(newFriend);
        const friendRequestId = friendRequest.id;

        const [userWithAddedFriend, addedFriend] = await Promise.all([
            sendFriendRequestToUser(requesterId, friendRequestId),
            sendFriendRequestToUser(recipientId, friendRequestId)
        ]);

        return res.status(201).json({
            msg: 'Success: friend request sent',
            updatedUser: userWithAddedFriend,
            newFriend: addedFriend
        })
    } catch (err) {
        return res.status(500).json({
            msg: 'Unknown error occured',
            err
        })
    }
})

module.exports = router;