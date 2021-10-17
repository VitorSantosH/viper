const mongoose = require('mongoose')
const Schema = mongoose.Schema


function userSchema () {

    const User  = new Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String, 
            required: true
        },
        tel: {
            type: Number
        },
        cep: {
            type: Number,
            default: null
        },
        password: {
            type: String,
            required: true 
        },
        isAdm: {
            type: Boolean,
            default: false 
        }
    })

    mongoose.model('Users', User)


}

module.exports = userSchema