var mongoose = require('mongoose');
var CineplexSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    logo: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('Cineplex', CineplexSchema);
