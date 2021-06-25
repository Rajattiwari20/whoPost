const express = require('express');
const router = express.Router();

const userController = require('../controllers/users_controller_Api');
router.get('/' , userController.userApi);

//signUP

router.post('/sign-up' , userController.signUp)

//logIn

router.post('/log-in' , userController.logIn)

//update

router.put('/:id' , userController.updateUser);
//delete

//follow

//unfollow  

module.exports = router;