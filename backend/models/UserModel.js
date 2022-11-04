const mongoose = require('mongoose')


const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true
    },
 
    profession: {
        type: String,
        required: [true, "Please enter your first name!"],
        trim: true
    },
    age: {
        type: String,
        required: [true, "Please enter your last name!"],
        trim: true
    },
    
    
    


})

module.exports = mongoose.model('user', userSchema)