const express = require('express');
const userController = require('../controllers/UserController');
const authController= require('../controllers/authController');


const router = express.Router();

router.post('/signup', userController.signup);

router.post('/login', userController.login);
router.post('/startup', authController.startupForm )
router.get('/startup', authController.getStartupData )
module.exports =router;