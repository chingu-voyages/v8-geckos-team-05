const mongoose = require('mongoose')


const friendSchema = new mongoose.Schema({
    requester: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    status: {
         type: Boolean
    }
  }, {timestamps: true})

  friendSchema.set('toObject',{
    transform: function(doc,ret){
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
})
Friends = mongoose.model('Friend', friendSchema)

module.expots = Friends;
