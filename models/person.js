const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    dni: {
        type: Number,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['Man', 'Women', 'Other']
    },
    birthDate: {
        type: Date,
        required: true
    },
    phone: {
        type: String,
        required: true
    }  
})

const PersonModel = mongoose.model('PersonModel', personSchema );

module.exports = PersonModel;