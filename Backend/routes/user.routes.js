const express = require('express');
const router = express.Router();

const {body} = require('express-validator');
const userController = require('../controllers/user.controller.js')
const authMiddleware = require('../middlewares/auth.middleware.js')


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('firstname must have 3 characters'),
    body('password').isLength({min:6}).withMessage("password must have 6 characters")



], userController.registerUser)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must have 6 characters')

], userController.loginUser)

router.get('/profile',authMiddleware.authUser, userController.getUserProfile)

router.get('/logout',authMiddleware.authUser, userController.logoutUser)

module.exports = router;










