const mongoose = require('mongoose');

const teachSchema = mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    require:true
  },
  rating:{
    type:Number,
    require:true
  }

})
