const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const userRouter = require('./routes/userRouter');

app.use(cors({ origin: true }));
app.use(express.json());
app.use(cookieParser());

// Endpoints
app.use('/api/user', userRouter); // User endpoints

// 404 Error Handler
app.use((req, res) => res.sendStatus(404));

// Global Error Handler
app.use((err, req, res, next) => {
  // Default error that is used to fill in missing info err param
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }
  };
  // Merge err with default err (preserving err)
  const errorObj = Object.assign({}, defaultErr, err);
  // Server-side log of the error
  console.log(errorObj.log);
  // Client-side log of the error
  return res.status(errorObj.status).json({ status: errorObj.status, ...errorObj.message });
});


app.listen(3000);