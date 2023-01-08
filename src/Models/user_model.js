const mongoose = require('mongoose');

const UserModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    createAdd:{
        type: Date,
        //Si nadie la carga nada manualmente, se carga por defecto lo siguiente↓
        default: Date.now()
    }
})

module.exports = mongoose.model("UserModel", UserModel)