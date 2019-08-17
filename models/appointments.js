const mongoose = require('mongoose');

const appointmentsSchema = mongoose.Schema({
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    appointmentStatus: {
        type: String,
        required: true,
        enum: ["free", 'accepted', 'refused', 'wait'],
        default: "free"
    }
});

const appointmentList = module.exports = mongoose.model('appointmentList', appointmentsSchema );

//list.find() returns all the lists
module.exports.getAllLists = (callback) => {
    appointmentList.find(callback);
}

//newList.save is used to insert the document into MongoDB
module.exports.addList = (newList, callback) => {
    newList.save(callback);
}

//Here we need to pass an id parameter to appointmentList.remove
module.exports.deleteListById = (id, callback) => {
    let query = {_id: id};
    appointmentList.remove(query, callback);
}

module.exports.setPatientId = (appointmentId, patientId, callback) => {
    let query = {_id: appointmentId};
    appointmentList.update(query, {$set: {patientId: patientId}}, callback);
}