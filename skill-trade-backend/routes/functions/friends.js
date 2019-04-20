const User = require('../../models/user')
const Friend = require('../../models/friend')

const checkIfRequestAlreadySent = async (requesterId, recipientId) => {
    const userDoc = await User
        .findById(recipientId, 'friendRequests')
        .populate('friendRequests', 'requester')
        .exec();

    return userDoc.friendRequests.some(({
        requester
    }) => requester.toString() === requesterId)
}

const sendFriendRequestToUser = async (userId, reqId) => {
    const updatedUser = await User
        .findByIdAndUpdate(
            userId, {
                $push: {
                    friendRequests: reqId
                }
            }, {
                new: true,
                fields: 'username friendRequests friends'
            }
        )
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
    const userWithAddedFriend = await User
        .findByIdAndUpdate(
            userId, {
                $push: {
                    friends: friendId
                }
            }, {
                new: true,
                select: 'username friends friendRequests'
            }
        )
        .populate('friends', 'username')
        .exec();

    return userWithAddedFriend;
}

const deleteFriendRequest = async (userId, requestId) => {
    const updatedUser = await User.findByIdAndUpdate(
        userId, {
            $pull: {
                friendRequests: requestId
            }
        }
    ).exec();

    return updatedUser;
}

module.exports = {
    checkIfRequestAlreadySent,
    sendFriendRequestToUser,
    acceptFriendRequest,
    denyFriendRequest
}