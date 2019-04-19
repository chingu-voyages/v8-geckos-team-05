const Friend = require('../../models/friend')
const User = require('../../models/user')

const checkIfRequestAlreadySent = async (requesterId, recipientId) => {
    const usersFriendIds = await User
        .findById(recipientId, 'friendRequests')
        .populate('friendRequests', 'requester')
        .exec();

    return usersFriendIds.friendRequests.some(request => request.requester.toString() === requesterId)
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

module.exports = {
    checkIfRequestAlreadySent,
    sendFriendRequestToUser
}