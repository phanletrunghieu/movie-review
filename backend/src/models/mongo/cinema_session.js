var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CinemaSessionSchema = new mongoose.Schema({
    cinema: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Cinema',
    },
    film: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Film',
    },
    date: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model('CinemaSession', CinemaSessionSchema);
