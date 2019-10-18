const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctor');
const appointmentsList = require('../models/appointments');
const PersonModel = require('../models/person');
const http = require('http');
const https = require('https');
const api_helper = require('./api_helper');
const axios = require('axios');


router.get('/PendingAppointments',(req,res) => {
    api_helper.make_API_call('http://localhost:3001/vr/api/appointment/doctor/pending/5da7756ee4d594146bf56595')
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    });
});

router.get('/ApprovedAppointments',(req,res) => {
    api_helper.make_API_call('http://localhost:3001/vr/api/appointment/doctor/approved/5da7756ee4d594146bf56595')
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    });
});

router.post('/ApproveAppointment/:id',(req,res) => {
    axios.post('http://localhost:3001/vr/api/appointment/approve/' + req.params.id)
    .then(response => {
        res.json({success: true})
    })
    .catch(error => {
        res.send(error)
    });
});


router.post('/rejectAppointment/:id',(req,res) => {
    axios.post('http://localhost:3001/vr/api/appointment/reject/' + req.params.id)
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    });
});



module.exports = router;