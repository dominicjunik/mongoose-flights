const mongoose = require('mongoose')

const Schema = mongoose.Schema



const flightsSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    }
})

const Flights = mongoose.model('flights', flightsSchema)

module.exports = Flights