const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model.js'); // Ensure this path is correct
const BlacklistedTokenModel = require('../models/blacklstToken.model.js');
const captainModel = require('../models/captain.model.js'); // Ensure this path is correct
const bcrypt = require('bcrypt');

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

const isBlacklisted = await userModel.findOne({ tokenBlacklist: token });
console.log(isBlacklisted)

if (isBlacklisted) {
    return res.status(401).json({ message: 'Unauthorized' });   
}

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id)

        req.user = user;

        return next();

    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}


module.exports.authCaptain = async (req, res, next) => {
  
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

    console.log("extracted tokem", token)

 

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });

    
    }

    

    const isBlacklisted = await BlacklistedTokenModel.findOne({ token: token });

    console.log("it is blacklisted",isBlacklisted)


    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const Captain = await captainModel.findById(decoded._id)

        req.captain = Captain;
        console.log(Captain)

        return next();

    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

}