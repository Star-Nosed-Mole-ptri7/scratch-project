const express = require('express');

const userController = require('../controllers/userController');
const sessionController = require('../controllers/sessionController');

const router = express.Router();

router.get('/', userController.getTest, (req, res) => {
  return res.status(200).send(res.locals);
});

router.post('/signup', userController.createUser, sessionController.setCookie, (req, res) => {
  return res.status(200).send(res.locals);
});

router.post('/login', userController.loginUser, sessionController.setCookie, (req, res) => {
  return res.status(200).send(res.locals);
});

// router.patch('/', userController.editUser, (req, res) => {
//   return res.status(200).send(res.locals)
// })

router.delete('/:id', userController.deleteUser, (req, res) => {
  return res.status(200).send(res.locals)
});


module.exports = router;