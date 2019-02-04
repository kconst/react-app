var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var activitySchema = new Schema ({

    city_id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    itinerary_id:{
        type: mongoose.Schema.Types.ObjectId,
    },
    activityPic:{
        type: String,
    }
})

module.exports = activity = mongoose.model('activity', activitySchema);