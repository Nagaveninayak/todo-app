const mongoose = require('mongoose')
const moment = require('moment-timezone')
const Schema = mongoose.Schema

const dateIndia = moment.tz(Date.now(), "Asia/Calcutta")

const listSchema = new Schema({
    topic: {
        type: String,
        required: true
    },
    tasks: [{
        title: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            default: false
        }
    }],
    Date: {
        type: Date,
        default: dateIndia
    }
})

const List = mongoose.model('List', listSchema)

module.exports = List