const userModel = require('../models/user.model.js');
const userService = require('../services/user.service.js');
const {validationResult} = require('express-validator');
const BlackListModel = require('../models/blacklstToken.model.js');



module.exports.registerUser = async (req, res, next) =>{

     const errors = validationResult(req)
     if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
     }

     const {fullname, email, password} = req.body;

     const userAlreadyExists = await userModel.findOne({email});

     if(userAlreadyExists){
         return res.status(400).json({message: 'User already exists'})
     }

     const hashedPassword = await userModel.hashPassword(password);


     const user = await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword
     })


     const token = user.generateAuthToken();

     res.status(201).json({ token,user })




}

module.exports.loginUser = async( req, res, next) =>{
      const errors = validationResult(req)
      if(!errors.isEmpty()){
         return res.status(400).json({errors: errors.array()})
      }

      const {email, password} = req.body;
      const user = await userModel.findOne({email}).select('+password');

      if(!user){
          return res.status(404).json({message: 'User not found'})
      }

      const isMatch = await user.comparePassword(password);

      if(!isMatch){
         return res.status(400).json({message: 'Invalid credentials'})

      }

      const token = user.generateAuthToken();
      res.cookie('token', token);
      res.status(200).json({token, user})
}


module.exports.getUserProfile = async (req, res, next) =>{
      const user = req.user;
      res.status(200).json(user)
}


module.exports.logoutUser = async (req, res, next) =>{
      res.clearCookie('token');

      const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
      await BlackListModel.create({
          token
      })

      res.status(200).json({message: 'Logged out successfully'})
}