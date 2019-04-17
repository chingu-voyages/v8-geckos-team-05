const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const friendSchema = require('./friend.js');
const userSchema = new mongoose.Schema({
  username:{
    type:String,
     require:true,
     unquie:true
   },
  password:{
    type:String,
    require:true
  },
  friends:[
    {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  ]
  ,
  online:{
    type:Boolean,
    require:true
  },

  create:{
    type:Date,
    default:Date.now
  }
});

userSchema.set('toObject',{
  transform:function(doc,ret){
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    delete ret.password;
  }
});


userSchema.methods.validatePassword = function(password){
  return bcrypt.compare(password,this.password);
};
// Using bcrypt to hashPassword of the user with salt of 10
userSchema.statics.hashPassword = function(password){
  return bcrypt.hash(password,10)
};
const User = mongoose.model('User', userSchema);

module.exports = User;
