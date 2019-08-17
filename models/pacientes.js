const mongoose = require('mongoose');

const pacienteSchema = mongoose.Schema({
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
    requieredAppointments: {
        type: [mongoose.Schema.Types.ObjectId]
    }
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