const express = require('express');
const jwt = require('jsonwebtoken');
const userController = require('../controllers/userController');
const tokenController = require('../controllers/tokenController');

const router = express.Router();

// TODO: Will we ever need this? Can we get everything at login? 👀
router.get('/:id', userController.getUser, (req, res) => {
  return res.status(200).send(res.locals);
});

router.post('/signup', userController.createUser, (req, res) => {
  return res.status(200).send(res.locals);
});

router.post('/login', userController.loginUser, (req, res) => {
  // Create a jwt signed token upon successful login
  const token = jwt.sign(
    { userData: res.locals.userData }, // User info (user_id, email, hashed password, name_first, name_last, created at)
    process.env.ACCESS_TOKEN_SECRET, // Secret token
    { expiresIn: '10m' } // Token expires in 10 minutes (can change later)
  );
  res.cookie('token', token, { httpOnly: true }); //creates a cookie
  res.status(200).json(res.locals.userData); 
});

// TODO: Should delete be using request body instead of request params?
router.delete('/:name', tokenController.verifyToken, userController.deleteUser, (req, res) => {
  return res.status(200).send(res.locals);
});

module.exports = router;
