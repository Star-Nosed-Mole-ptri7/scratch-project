const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getTest, (req, res) => {
  return res.status(200).send(res.locals);
});

router.post('/signup', userController.createUser, (req, res) => {
  return res.status(200).send(res.locals);
});

router.post('/login', userController.loginUser, (req, res) => {
  return res.status(200).send(res.locals);
});

// router.patch('/', userController.editUser, (req, res) => {
//   return res.status(200).send(res.locals)
// })

router.delete('/:id', userController.deleteUser, (req, res) => {
  return res.status(200).send(res.locals)
});


module.exports = router;