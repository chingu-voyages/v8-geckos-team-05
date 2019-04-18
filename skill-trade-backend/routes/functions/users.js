const User = require("../../models/user");

const hasWhiteSpace = str => /.*\s.*/.test(str);

const isNotString = str => typeof str !== "string";

const usernameExistsInDb = async username => {
    const existingUser = await User.findOne({
        username
    }).exec();

    if (existingUser) {
        return true;
    } else return false;
};

module.exports = {
    hasWhiteSpace,
    isNotString,
    usernameExistsInDb
}