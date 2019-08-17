const mongoose = require('mongoose');

const doctorsSchema = mongoose.Schema({
    dni: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['Hombre', 'Mujer', 'Otro']
    },
    appointments: {
        type: [mongoose.Schema.Types.ObjectId]
    }
});

const doctorsList = module.exports = mongoose.model('doctorsList', doctorsSchema );

//list.find() returns all the lists
module.exports.getAllLists = (callback) => {
    doctorsList.find(callback);
}

//newList.save is used to insert the document into MongoDB
module.exports.addList = (newList, callback) => {
    newList.save(callback);
}

//Here we need to pass an id parameter to doctorsList.remove
module.exports.deleteListById = (id, callback) => {
    let query = {_id: id};
    doctorsList.remove(query, callback);
}

module.exports.addAppointment = (doctorId, appointmentId, callback) => {
    let query = {_id: doctorId};
    doctorsList.update(query, {$push: {appointments: appointmentId}}, callback);
}