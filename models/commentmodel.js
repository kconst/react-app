var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema ({
    itinerary_id:{
        type: mongoose.Schema.Types.ObjectId,
    },

    user: {
        type: String,
    },

    comment:{
        type: String,
    }
}) 

module.exports = commment = mongoose.model('comment', commentSchema);