const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema

const notesSchema = new Schema({
    head: {
        type: String
    },
    note: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    collaborators: {
        type: String,
    },
    lists: [{
        title : {
            type: String
        }
    }]
})

const Notes = mongoose.model('Notes', notesSchema)

module.exports = Notes