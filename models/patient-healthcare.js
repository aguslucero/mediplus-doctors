const mongoose = require('mongoose');

const patientHealthcareSchema = mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    healthcareId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    // numero de socio
    socialId: {
        type: String,
        required: true
    }
});

const patientHealtcare = mongoose.model('patientHealthcare', patientHealthcareSchema);
module.exports = patientHealtcare;