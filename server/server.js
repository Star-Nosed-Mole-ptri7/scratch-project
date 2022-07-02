// require('dotenv').config(); // For .env

const express = require('express');
const app = express();
const path = require('path');

const dbRouter = require('./routes/dbRouter');

app.use(express.json());

app.use('/build', express.static('./build'));

// app.use('/api', dbRouter);

app.get('/*', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

app.listen(3000);