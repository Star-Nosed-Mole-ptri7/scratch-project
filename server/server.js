// require('dotenv').config(); // For .env

const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

const userRouter = require('./routes/userRouter');

app.use(express.json());
app.use(cookieParser());

app.use('/build', express.static('./build'));

app.use('/api', userRouter);

app.get('/*', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});


//ROUTER FOR ANDY//
app.get('/', (req, res) => {
  return res.status(200);
});



app.listen(3000);