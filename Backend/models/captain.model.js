const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const captainSchema = new mongoose.Schema({
fullname: {
    firstname: {
        type: String,
        required: true,
        minlength: [3, 'Firstname must be atleast 3 characters long']
    }, 

    lastname:{
        type: String,
        required: true,
        minlength: [3, 'Lastname must be atleast 3 characters long']
    }
 },


    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    vehicle: {
        color:{
            type: String,
            required: true,
            minlength: [3, 'Color must be atleast 3 characters long'] 
        },
        plate:{
            type: String,
            required: true,
            minlength: [3, 'Plate must be atleast 3 characters long']
        },
        capacity:{
            type: Number,
            required: true,
            min: [1, 'Capacity must be atleast 1']
    },
    vehicleType: {
        type: String,
        required: true,
        enum: ['car', 'motorcycle', 'auto']
    }
},
    status: {
        type: String,
        enum: ['active', 'Inactive'],
        default: 'Inactive'
    },
    socketId: {
        type: String,
    
    },
    location: {
      lat:{
            type: Number,
           
      },
      lng:{
            type: Number,
            
      }
    },
});




captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this.id}, process.env.JWT_SECRET, {expiresIn: '24h'})
    return token;
}


captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10)
}


const Captain = mongoose.model('Captain', captainSchema);

module.exports = Captain;