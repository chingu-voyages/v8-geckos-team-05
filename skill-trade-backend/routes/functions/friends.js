const Friend = require('../../models/friend')
const User = require('../../models/user')

const checkIfUserHasFriend = async (userId, friendId) => {
    const usersFriendIds = await User
        .findById(userId, 'friends')
        .exec();
    
    return usersFriendIds.friends.some(id => id.toString() === friendId)
}

module.exports = {
    checkIfUserHasFriend
}