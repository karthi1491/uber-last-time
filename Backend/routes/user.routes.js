const express = require('express');
const router = express.Router();

const {body} = require('express-validator');
const userController = require('../controllers/user.controller.js')


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('firstname must have 3 characters'),
    body('password').isLength({min:6}).withMessage("password must have 6 characters")



], userController.registerUser)


module.exports = router;










