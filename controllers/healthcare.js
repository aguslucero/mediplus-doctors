const express = require('express');
const router = express.Router();
const api_helper = require('./api_helper');
const Healthcare = require('../models/healthcare');




//GET HTTP method to /pacientes
router.get('/allPrepaids',(req,res) => {
    api_helper.make_API_call('http://localhost:3001/vr/api/auth/allPrepaids')
          .then(response => {
              res.json(response)
          })
          .catch(error => {
              res.send(error)
          });
        });

//POST HTTP method to /pacientes

router.post('/', (req,res,next) => {
        let newHealthcare = new Healthcare({ 
            name: req.body.name,
        });
        Healthcare.add(newHealthcare, (err, list) => {
            if (err) {
                res.json({success: false, message: `failed to create a healthcare. Error: ${err}`})
            } else {
                res.json({success: true, message: `Added ${newHealthcare.name}`});
            }
        })
    });

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



module.exports = router;