const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const doctorSchema = mongoose.Schema({
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
    },
    workableWeek: {
        type: [{
            day: String,
            startHour: {
                hour: Number,
                minute: Number
            },
            finishHour:  {
                hour: Number,
                minute: Number
            },
            breakStart:  {
                hour: Number,
                minute: Number
            },
            breakFinish:  {
                hour: Number,
                minute: Number
            }
        }]
    }
});

const doctor = module.exports = mongoose.model('doctor', doctorSchema );

//list.find() returns all the lists
module.exports.getAllLists = (callback) => {
    doctor.find(callback);
}

//newList.save is used to insert the document into MongoDB
module.exports.addList = (newList, callback) => {
    newList.save(callback);
}

//Here we need to pass an id parameter to doctor.remove
module.exports.deleteListById = (id, callback) => {
    let query = {_id: id};
    doctor.remove(query, callback);
}

module.exports.addAppointment = (doctorId, appointmentId, callback) => {
    let query = {_id: doctorId};
    doctor.update(query, {$push: {appointments: appointmentId}}, callback);
}