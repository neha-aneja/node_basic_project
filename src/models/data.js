const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    ranking: {
        type: Number,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    score: {
        type: Number,
        required: true,
        trim: true
    },
    event: {
        type: String,
        default: '100m'
    }
})

// creating new collection
const dataRanking = new mongoose.model('DataRanking', dataSchema);

module.exports = dataRanking;