const express = require('express');
const jwt = require('jsonwebtoken');
const userController = require('../controllers/userController');
const tokenController = require('../controllers/tokenController');

const router = express.Router();

router.post('/signup', userController.createUser, (req, res) => {
  return res.sendStatus(200);
});

router.post('/login', userController.loginUser, tokenController.createToken, (req, res) => {
  return res.status(200).json(res.locals.userData); 
});

router.get('/logout', userController.logoutUser, (req, res) => {
  return res.sendStatus(200); 
});

router.delete('/', tokenController.verifyToken, tokenController.decodeToken, userController.deleteUser, (req, res) => {
  return res.sendStatus(200);
});

module.exports = router;
