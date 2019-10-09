const mongoose = require('mongoose');

const pacienteSchema = mongoose.Schema({
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
    healthcare: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'patientHealthcareSchema'
        }
    ]
});

const pacientesList = module.exports = mongoose.model('pacientesList', pacienteSchema );

//list.find() returns all the lists
module.exports.getAllLists = (callback) => {
    pacientesList.find(callback);
}

//newList.save is used to insert the document into MongoDB
module.exports.addList = (newList, callback) => {
    newList.save(callback);
}

//Here we need to pass an id parameter to pacienteslist.remove
module.exports.deleteListById = (id, callback) => {
    let query = {_id: id};
    pacientesList.remove(query, callback);
}

module.exports.requestedAppointments = (patientId, appointmentId, callback) => {
    let query = {_id: patientId};
    pacientesList.update(query, {$push: {requieredAppointments: appointmentId}}, callback);
} 