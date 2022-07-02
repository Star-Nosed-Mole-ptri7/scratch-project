// require('dotenv').config(); // For .env

const express = require('express');
const app = express();
const path = require('path');

const userRouter = require('./routes/userRouter');

app.use(express.json());

app.get('/build/bundle.js', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '..', 'build', 'bundle.js'));
});

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

app.use('/api', userRouter);

app.listen(3000);