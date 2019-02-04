var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itinerarySchema = new Schema({
    city_id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    title: {
        type: String,
    },

    profilePic: {
        type: String,
    },
    likes:{
        type: Number,
    },
    time: {
        type: Number,
    },
    price: {
        type: Number,
    },
    hashtag: {
        type: Array,
    }
});

module.exports = itinerary = mongoose.model('itinerary', itinerarySchema);