const express = require('express');
const router = express.Router();
const doctorsList = require('../models/doctors');
const appointmentsList = require('../models/appointments');

//GET HTTP method to /pacientes
router.get('/',(req,res) => {
    doctorsList.getAllLists((err, lists) => {
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
        let newList = new doctorsList({
            dni: req.body.dni,
            name: req.body.name,
            surname: req.body.surname,
            gender: req.body.gender
        });
        doctorsList.addList(newList, (err, list) => {
            if (err) {
                res.json({success: false, message: `failed to create a new list. Error: ${err}`})
            } else {
                res.json({success: true, message: 'Added new list'});
            }
        })
    });


//DELETE HTTP method to /doctors. Here, we pass in a params which is the object dni.
router.delete('/', (req,res,next) => {
    
    let id;
    let dni = parseInt(req.body.dni);
    doctorsList.findOne({dni: dni}, function (err, obj) {
        id = obj.id;  
        //Call the model method deleteListById
        doctorsList.deleteListById(id,(err,list) => {
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
            doctorsList.addAppointment(req.body.doctorId, list.id, (err,list) => {
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