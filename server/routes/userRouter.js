const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// TODO: Will we ever need this? Can we get everything at login?
router.get('/:id', userController.getUser, (req, res) => {
  return res.status(200).send(res.locals);
});

router.post('/signup', userController.createUser, (req, res) => {
  return res.status(200).send(res.locals);
});

router.post('/login', userController.loginUser, (req, res) => {
  return res.status(200).send(res.locals);
});

// TODO: Should delete be using request body instead of request params?
router.delete('/:name', userController.deleteUser, (req, res) => {
  return res.status(200).send(res.locals);
});

module.exports = router;
