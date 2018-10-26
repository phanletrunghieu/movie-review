var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var GenreSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    is_home: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('Genre', GenreSchema);
