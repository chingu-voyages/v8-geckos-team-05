const express = require("express");
const mongoose = require("mongoose");
const Friend = require("../models/friend");
const User = require("../models/user");
const passport = require("passport");
const router = express.Router();

router.post("/friend_request/:id", (req, res, next) => {
  const friendId = req.params.id;
  const userId = req.user._id;
  const newFriend = {
    requester: userId,
    recipient: friendId,
    status: null
  };
  // Need to add newFriend to friend Array getting the params of the user, and inserting
  User.findById(userId).then(result => {
    let check = false;

    if (result.friend.length < 1 || result.friend == undefined) {
      console.log("Checking here");
      return User.findOneAndUpdate(
        {
          _id: userId
        },
        {
          $push: {
            friend: newFriend
          }
        },
        {
          new: true
        }
      )
        .then(result => {
          res.json(result);
        })
        .catch(err => next(err));
    }
    // looping threw the recipient for no double friend request made
    for (var i = 0; i < result.friend.length; i++) {
      let frendArr = result.friend[i].recipient.id;
      if (frendArr === friendId.id) {
        check = true;
      }
    }
    console.log(check, "sec step");

    if (check === true) {
      const err = new Error("That request was already made");
      err.status = 400;
      return next(err);
    } else {
      return User.findOneAndUpdate(
        {
          _id: userId
        },
        {
          $push: {
            friend: newFriend
          }
        },
        {
          new: true
        }
      )
        .then(result => {
          res.json(result);
        })

        .catch(err => {
          console.log(`${err} HERE THER ERROR`);
          next(err);
        });
    }
  });
});

router.post("/friend_responsed/:id", (req, res, next) => {
  const userId = req.user._id;
  const friendId = req.params;
  const friendArr = req.user.friend;

  User.find({ _id: userId }, { friend: req.user.friend })
    .then(result => {
      res.json(result);
    })
    .catch(err => res.json(err));
});

module.exports = router;
