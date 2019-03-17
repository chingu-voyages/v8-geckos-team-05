const dotenv = require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const passport = require('passport')
const { PORT,JWT_SECRET} = require('./config');
const { dbConnect } = require('./db-mongoose');
const localStrategy = require('./passport/local');
const jwtStrategy = require('./passport/jwt');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const friendRouter = require('./routes/friends');
const app = express();

console.log(JWT_SECRET);
//Using express with JSON
app.use(express.json());

// Morgan MiddleWare
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

//Configure passport
passport.use(localStrategy);
passport.use(jwtStrategy);
// Using our Routes listed below
app.use('/api',userRouter);
app.use('/api',authRouter);
// This passport authenticate is used to protect our urls
app.use(passport.authenticate('jwt', { session: false, failWithError: true }));
app.use('/api',friendRouter);
// The Listen of this
function runServer(port = PORT) {
    const server = app
      .listen(port, () => {
        console.info(`App listening on port ${server.address().port}`);
      })
      .on('error', err => {
        console.error('Express failed to start');
        console.error(err);
      });

  };

if (require.main === module) {
    dbConnect();
    runServer();
  };



module.exports = { app };
