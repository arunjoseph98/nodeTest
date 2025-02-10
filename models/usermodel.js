const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username : { type:String, require: true},
    email: {type:String, require: true,unique: true},
    password : { type:String, require: true},
    ph : { type:String},
})

const users = mongoose.model('user',userSchema)

module.exports = users