const express = require('express');
const router = express.Router();

const Friend = require('../models/friend');
const User = require('../models/user');

const {
    checkIfUserHasFriend
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
        const friendDocument = await Friend.create(newFriend);
        const friendRequestId = friendDocument.id;

        const userWithAddedFriend = await User
        .findByIdAndUpdate(
            requesterId, {
                $push: {
                    friends: friendRequestId
                }
            }, {
                new: true,
                fields: 'username friends'
            }
        )
        .populate('friends')
        .exec();

        const addedFriend = await User
        .findByIdAndUpdate(
            recipientId, {
                $push: {
                    friends: friendRequestId
                }
            }, {
                new: true,
                fields: 'username friends'
            }
        )
        .populate('friends')
        .exec();

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