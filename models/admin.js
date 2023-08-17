const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ROLE = ["admin","user"] 

const adminSchema = new Schema({

    Username: String

},{versionKey:false})

module.exports = mongoose.model('Admin',adminSchema)

module.exports = ROLE