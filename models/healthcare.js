const mongoose = require('mongoose');

const healthcareSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const Healthcare =  mongoose.model('healthcare', healthcareSchema );
module.exports = Healthcare; 



//list.find() returns all the lists
module.exports.getAll = (callback) => {
   Healthcare.find(callback);
}
//newhealthcare.save is used to insert the document into MongoDB
module.exports.add = (newHealthcare, callback) => {
    newHealthcare.save(callback);
}

//Here we need to pass an id parameter to healthcare.remove
module.exports.deleteById = (id, callback) => {
    let query = {_id: id};
    Healthcare.remove(query, callback);
}




