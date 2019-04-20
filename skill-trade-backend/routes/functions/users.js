const User = require("../../models/user");

const hasWhiteSpace = str => /.*\s.*/.test(str);

const isNotString = str => typeof str !== "string";

const usernameExistsInDb = async username => {
    const query = {
        'username': { $regex: new RegExp(username, 'i')}
    }
    const existingUser = await User.findOne(query).exec();

    if (existingUser) {
        return true;
    } else return false;
};

module.exports = {
    hasWhiteSpace,
    isNotString,
    usernameExistsInDb
}