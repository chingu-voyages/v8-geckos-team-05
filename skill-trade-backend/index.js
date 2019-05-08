const dotenv = require('dotenv').config();
const express = require('express');

const { PORT,JWT_SECRET} = require('./config');
const { dbConnect } = require('./db-mongoose');

const userRouter = require('./routes/newUserRoute');
const authRouter = require('./routes/auth');
const friendRouter = require('./routes/newFriendsRoute.js');
const app = express();


app.use(express.json());


app.use(express.urlencoded({extended:false}));

app.use('/api',userRouter);
app.use('/api',friendRouter);

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
