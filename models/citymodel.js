var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var citySchema = new Schema({
    name: {type: String},
    country: {type: String},
});


module.exports = city = mongoose.model('city', citySchema); //patatas en este caso sera le nombre de coleccion que crearemos. que puede ser cualquier nombre. mongoose model nos crea la coleccion con el nombre que elijamos