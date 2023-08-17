const mongoose = require('mongoose')

const Schema = mongoose.Schema

const interacSchema = new Schema({

    reactions: {
        type: Boolean
    },
    comments: {
        type: String,
        content: String,
        date: Date
    },
    
    publication:{
        ref: 'Publication',
        type:Schema.Types.ObjectId

    }

},{versionKey:false})

module.exports = mongoose.model('Interactions',interacSchema)