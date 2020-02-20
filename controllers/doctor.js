const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctor');
const appointmentsList = require('../models/appointments');
const PersonModel = require('../models/person');
const http = require('http');
const https = require('https');
const api_helper = require('./api_helper');
const axios = require('axios');
const verifyToken = require('./tokenValidator');

router.get('/CurrentUser', verifyToken, (req,res) => {
    api_helper.make_API_call('http://localhost:3001/vr/api/doctor/'+ req.userId)
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    });
});

router.post('/CreateWorkableDay', verifyToken,  (req,res) => {
  axios.post('http://localhost:3001/vr/api/doctor/work/'+ req.userId,{ "workableDay": {
        "name": "nombre",
        "number": req.body.workableDay.number,
        "startHour":  req.body.workableDay.startHour,
        "finishHour":  req.body.workableDay.finishHour,
        "breakStart":  req.body.workableDay.breakStart,
        "breakFinish":  req.body.workableDay.breakFinish,
        "maxAppointments":  req.body.workableDay.maxAppointments
    }})
    .then(response => {
        res.json(response)
        console.log(response);
    })
    .catch(error => {
        res.send(error)
    });
   


})


router.get('/PendingAppointments', verifyToken,(req,res) => {
    api_helper.make_API_call('http://localhost:3001/vr/api/appointment/doctor/pending/'+ req.userId)
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    });
});

router.get('/ApprovedAppointments', verifyToken,(req,res) => {
    api_helper.make_API_call('http://localhost:3001/vr/api/appointment/doctor/approved/'+ req.userId)
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

router.post('/prepaid', verifyToken, (req,res) => {    
  axios.post('http://localhost:3001/vr/api/doctor/prepaid/'+ req.userId,{ "prepaid": {
    "name": req.body.prepaid.name
    }})
    .then(response => {
        res.json(response)
        console.log(response);
    })
    .catch(error => {
        res.send(error)
    });
});

router.get('/clinics', (req,res) => {
    api_helper.make_API_call('http://localhost:3001/vr/api/clinic/all')
    .then(
        response => {
            res.status(200).json(response)
            
        })
        .catch(error =>{
             res.send(error)
        });
        

});

router.post('/clinicAdd/:clinicId', verifyToken, (req,res) => {    
    axios.post('http://localhost:3001/vr/api/clinic/add',  {
    
       "clinic": req.params.clinicId,
      "doctor": req.userId
      })
      .then(response => {
          res.json(response)
          console.log(response);
      })
      .catch(error => {
          res.send(error)
      });
  });




router.post('/update', verifyToken, (req,res) => {    
    axios.post('http://localhost:3001/vr/api/doctor/update/' + req.userId,{ 'person': {
        'firstName': req.body.doctor.name,
        'lastName':  req.body.doctor.lastName,
        'birthDate': req.body.doctor.birthDate,
        'dni': req.body.doctor.dni,
        'phone':  req.body.doctor.phone,      
        }, 
        'doctor': {
            'speciality': req.body.doctor.speciality,
            'addres': req.body.doctor.adress,
            'profileUrl': req.body.doctor.profileUrl
        }
    })
    .then(response => {
        res.json(response)
        console.log(response);
    })
    .catch(error => {
        res.send(error)
    });
});

router.delete('/clinic/remove/:id', verifyToken, (req,res) => {    
    axios.delete('http://localhost:3001/vr/api/clinic/remove',{

    data: { 
        'clinic': req.params.id,
        'doctor': req.userId
      }
    })
      .then(response => {
          res.json(response)
          console.log(response);
      })
      .catch(error => {
          res.send(error)
      });
  });

  router.get('/doctorClinics', verifyToken, (req,res) => {
    api_helper.make_API_call('http://localhost:3001/vr/api/clinic/myclinics/'+ req.userId)
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.send(error)
        });
    });


module.exports = router;