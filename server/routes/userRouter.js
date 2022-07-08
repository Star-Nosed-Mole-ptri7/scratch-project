const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/:name', userController.getUser, (req, res) => {
  return res.status(200).send(res.locals);
});

// router.post('/', userController.createUser, (req, res) => {
//   return res.status(200).send(res.locals)
// })

// router.patch('/', userController.updateUser, (req, res) => {
//   return res.status(200).send(res.locals)
// })

// router.delete('/:name', userController.deleteUser, (req, res) => {
//   return res.status(200).send(res.locals)

// })

// router.post('/login', userController.verifyUser, (req, res) => {
//   // resturn res.status(200).sendFile(path.join(__dirname, **SERVE USER PAGE**)

// });


module.exports = router;