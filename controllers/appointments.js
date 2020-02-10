const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctor');
const appointmentsList = require('../models/appointments');
const PersonModel = require('../models/person');
const http = require('http');
const https = require('https');
const api_helper = require('./api_helper')
const verifyToken = require('./tokenValidator');


router.get('/all', verifyToken, (req,res) => {
    api_helper.make_API_call('http://localhost:3001/vr/api/appointment/doctor/'+req.userId)
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    });
});




module.exports = router;