const Friend = require('../../models/friend')
const User = require('../../models/user')

const checkIfUserHasFriend = async (userId, friendId) => {
    const usersFriendIds = await User
        .findById(userId, 'friends')
        .exec();

    return usersFriendIds.friends.some(id => id.toString() === friendId)
}

const sendFriendRequestToUser = async (userId, reqId) => {
    const updatedUser = await User
        .findByIdAndUpdate(
            userId, {
                $push: {
                    friends: reqId
                }
            }, {
                new: true,
                fields: 'username friends'
            }
        )
        .populate('friends', 'requester recipient status')
        .exec();

    return updatedUser
}

module.exports = {
    checkIfUserHasFriend,
    sendFriendRequestToUser
}