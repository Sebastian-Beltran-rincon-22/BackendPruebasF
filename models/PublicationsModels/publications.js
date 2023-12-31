const mongoose = require('mongoose')
//Created a const to store the mongoose module (allows create a model Schema)
const Schema = mongoose.Schema;

const PublicationSchema = new Schema({
    user: {
        ref: 'User',
        type: Schema.Types.ObjectId
    },
    date_create: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: true,
        maxLength: 200
    },
    image: {
        type: String
    },

},{versionKey:false})

const publication = mongoose.model("Publication", PublicationSchema)
module.exports = publication