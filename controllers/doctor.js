const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctor');
const appointmentsList = require('../models/appointments');
const PersonModel = require('../models/person');

//GET HTTP method to /pacientes
router.get('/',(req,res) => {
    Doctor.getAllLists((err, lists) => {
        if (err) {
            res.json({success: false, message: `Failed to load all lists. Error: ${err}`});
        } else {
            res.write(JSON.stringify({success: true, lists:lists},null,2));
            res.end();
        }
    })
});

router.get('/specialist/:specialistName',(req,res) => {
//    let specialist = req.body.specialist;
    console.log(req.params.specialistName); 
    Doctor.find({gender:'Man'}, (err, lists) => {
        if (err) {
            res.json({success: false, message: `Failed to load all lists. Error: ${err}`});
        } else {
            res.write(JSON.stringify({success: true, lists:lists},null,2));
            res.end();
        }
    })
});

//POST HTTP method to /doctors

router.post('/', (req,res,next) => {
        let newDoctor = new Doctor({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            dni: req.body.dni,
            gender: req.body.gender,
            phone: req.body.phone,
            birthDate: req.body.birthDate 
        });
        Doctor.addList(newDoctor, (err, list) => {
            if (err) {
                res.json({success: false, message: `failed to create a new list. Error: ${err}`})
            } else {
                res.json({success: true, message: 'Added new list'});
            }
        })
    });

// METODO PARA AGREGAR TURNOS

//DELETE HTTP method to /doctors. Here, we pass in a params which is the object dni.
router.delete('/', (req,res,next) => {
    
    let id;
    let dni = parseInt(req.body.dni);
    Doctor.findOne({dni: dni}, function (err, obj) {
        id = obj.id;  
        //Call the model method deleteListById
        Doctor.deleteListById(id,(err,list) => {
            if(err) {
                res.json({success:false, message: `Failed to delete the list. Error: ${err}`});
            }
            else if(list) {
                res.json({success:true, message: "Deleted successfully"});
            }
            else
                res.json({success:false});
        })
    });
    
  });

  router.post('/createappointment', (req, res, next) => {
    let newAppointment = new appointmentsList ({
        doctorId: req.body.doctorId,
        date: req.body.date,
        appointmentStatus: req.body.appointmentStatus,
    });

    appointmentsList.addList(newAppointment, (err, list) => {
        if (err) {
            res.json({success: false, message: `failed to create a new list. Error: ${err}`})
        } else {
            console.log('turno creado. Asignandolo al doctor.');
            Doctor.addAppointment(req.body.doctorId, list.id, (err,list) => {
                if (err) {
                    res.json({success: false, message: `failed to create a new list. Error: ${err}`})
                } else {
                    res.json({success: true, message: 'Added new list'});
                }
            })
        }
    });
  })

module.exports = router;