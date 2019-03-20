const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.post('/register',(req,res,next) =>{
  //destructuring the object req.body.username && req.body.password
  // check by
   console.log(req.body)
  const {username,password} = req.body;

    //Checking that the fields have no whitespace
  const checkingWhiteSpace = function(string){
    let check = false;
    const whiteSpace = string.split('').forEach((char)=>{
      if(char === ' '){
        check = true
      }
    })
    if(check === true){
      const err = new Error('Please ensure that there are no spaces in the username or password')
      err.status = 422;
      return next(err);
    }
  }
//Checking that the fields is just a string
  const notString = function(string){
    if(typeof string !== 'string'){
      const err = new Error(` Provided Info contains an entry that is not a string`)
      err.status = 422;
      return next(err);
    }
  }
// which fiels that are being checked req.body.username && req.body.password
  const checkArr = [username,password];

  checkArr.forEach((item)=>{
    checkingWhiteSpace(item);
    notString(item);
  })
  // Checking that the the username is in the request body
  if(!username){
    const err = new Error('Missing "password" in request body')
    err.status = 400;
    return next(err)
  }
  // Checking that the username is at least one character long
  if(username.length < 1){
    const err = new Error('Username must be at least one character in length')
    err.status = 422
    return next(err);
  }
    // Checking that the the password is in the request body
  if(!password){
    const err = new Error('Missing "password" in request body')
    err.status = 400;
    return next(err)
  }
    // Checking that the password is between 8 to 72 character in length
  if(password.length < 8 || password.length > 72){
    const err = new Error('Password must be between 8 to 72 character in length')
    err.status = 422;
    return next(err)
  }
    /*---------------------------------------
        Getting the Model from the User model
      ---------------------------------------*/
  User.find()
  .then((result)=>{
    let check = false;
    result.forEach((user)=>{
      if(user.username === username){
        check = true
      }
    })
    if(check === true){
      const err = new Error('That username already exists!')
      err.status = 400;
      return next(err);
    }
    else{
      return User.hashPassword(password)
      .then(digest =>{
        const newUser = {
          username:username,
          password:digest,
          friend:[],
          online:null,

        }
        User.create(newUser)
        .then((result)=>{
          res.location(`${req.originalUrl}/${result.id}`).status(201).json(result)
        })
        .catch((err)=> next(err));
      })
    }
  })
});

module.exports = router;
