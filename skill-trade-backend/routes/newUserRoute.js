const express = require("express");
const router = express.Router();
const User = require("../models/user");
const {
    hasWhiteSpace,
    isNotString,
    usernameExistsInDb
} = require('./functions/users');

router.post("/register", async (req, res) => {
    let {
        username
    } = req.body;
    
    const {
        password
    } = req.body;

    if (!username || !password) {
        return res
            .status(400)
            .json({
                err: "Please enter a username and password"
            });
    }

    try {
        if ([username, password].some(el => hasWhiteSpace(el))) {
            return res.status(422).json({
                err: "Entries cannot contain whitespace"
            });
        } else if ([username, password].some(el => isNotString(el))) {
            return res.status(422).json({
                err: "Entries must be strings"
            });
        } else if (password.length < 8 || password.length > 72) {
            return res.status(422).json({
                err: "Password must be between 8 and 72 characters in length"
            });
        } else if (await usernameExistsInDb(username)) {
            return res.status(400).json({
                err: "Username already exists"
            });
        }

        const hashedPassword = await User.hashPassword(password);

        const newUser = {
            username,
            password: hashedPassword,
            friends: [],
            online: null
        };

        const savedUser = await User.create(newUser);

        return res
            .status(201)
            .location(`${req.originalUrl}/${savedUser.id}`)
            .json(savedUser);
    } catch (err) {
        return res.status(400).json({
            err
        });
    }
});

module.exports = router;