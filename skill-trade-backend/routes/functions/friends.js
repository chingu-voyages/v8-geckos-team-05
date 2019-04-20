const User = require('../../models/user')
const Friend = require('../../models/friend')

const checkIfRequestAlreadySent = async (requesterId, recipientId) => {
    const userDoc = await User
        .findById(recipientId, 'friendRequests')
        .populate('friendRequests', 'requester')
        .exec();

    return userDoc.friendRequests.some(({ requester }) => requester.toString() === requesterId)
}

const sendFriendRequestToUser = async (userId, reqId) => {
    const update = {
        $push: {
            friendRequests: reqId
        }
    }

    const options = {
        new: true,
        fields: 'username friendRequests friends'
    }
    
    const updatedUser = await User
        .findByIdAndUpdate(userId, update, options)
        .populate('friendRequests', 'requester recipient status')
        .exec();

    return updatedUser
}

const acceptFriendRequest = async friendRequestId => {
    const friendRequest = await Friend.findById(friendRequestId).exec();

    const {
        requester: requesterId,
        recipient: recipientId
    } = friendRequest;

    await deleteFriendRequest(recipientId, friendRequestId);

    const [updatedRequester, updatedRecipient] = await Promise.all(
        [
            pushFriendToUser(requesterId, recipientId),
            pushFriendToUser(recipientId, requesterId)
        ]
    )

    return {
        updatedRequester,
        updatedRecipient
    }
}

const denyFriendRequest = async friendRequestId => {
    const friendRequest = await Friend.findById(friendRequestId).exec();

    const {
        recipient: recipientId
    } = friendRequest;

    const updatedRecipient = await deleteFriendRequest(recipientId, friendRequestId);

    return updatedRecipient;
}

const pushFriendToUser = async (userId, friendId) => {
    const update = {
        $push: {
            friends: friendId
        }
    }

    const options = {
        new: true,
        select: 'username friends friendRequests'
    }

    const userWithAddedFriend = await User
        .findByIdAndUpdate(userId, update, options)
        .populate('friends', 'username')
        .exec();

    return userWithAddedFriend;
}

const deleteFriendRequest = async (userId, requestId) => {
    const update = {
        $pull: {
            friendRequests: requestId
        }
    }

    const options = {
        new: true,
        select: 'username friendRequests'
    }

    const updatedUser = await User.findByIdAndUpdate(userId, update, options).exec();

    return updatedUser;
}

module.exports = {
    checkIfRequestAlreadySent,
    sendFriendRequestToUser,
    acceptFriendRequest,
    denyFriendRequest
}