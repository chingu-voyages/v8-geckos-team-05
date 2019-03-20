const mongoose = require('mongoose')
const {DATABASE_URL} = require('../config')
const User = require('../models/user')
const seedUser = require('../seed-db/users.json')

mongoose.connect(DATABASE_URL)
  .then(() => mongoose.connection.db.dropDatabase())
  .then(() => {
    return Promise.all([
      User.insertMany(seedUser)
    ]);
  })
  .then(() => mongoose.disconnect())
  .catch(err => {
    console.error(`ERROR: ${err.message}`);
    console.error(err);
  });
