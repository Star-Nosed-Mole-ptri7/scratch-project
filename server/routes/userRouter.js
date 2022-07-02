const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getTest, (req, res) => {
  return res.status(200).send(res.locals);
});

router.post('/api', userController.createUser, (req, res) => {
  return res.status(200).send(res.locals)
})

// router.patch('/', userController.editUser, (req, res) => {
//   return res.status(200).send(res.locals)
// })

// router.delete('/', userController.deleteUser, (req, res) => {
//   return res.status(200).send(res.locals)
// })




// router.post('/', dbController.saveAlgo, (req, res) => {
//   return res.status(200).send(res.locals);
// });

// router.delete('/', dbController.delAlgo, (req, res) => {
//   return res.status(200).send(res.locals);
// });

module.exports = router;