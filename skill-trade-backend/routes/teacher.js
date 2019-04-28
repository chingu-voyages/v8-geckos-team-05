const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Teacher = require('../models/teacher')


router.get('/teach/:id',(req,res,next)=>{
    let newTeacher ={
        firstName:"",
        lastName:"",
        job:"",
        location:"",
        rating:0
    }
    let userId = req.params.id;
    User.findByIdAndUpdate(userId)
    .then(results =>{
       results.forEach(index =>{
           console.log(index)
           return index
       })
    })
    .then(results =>{
        res.json(results)
    })
    
.catch(err => console.log(err))

})


module.exports = router;