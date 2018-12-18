var mongoose = require('mongoose');
var CinemaSchema = new mongoose.Schema({
    cineplex: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Cineplex',
    },
    name: {
        type: String,
        trim: true,
    },
    logo: {
        type: String,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
    },
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: [Number] 
    },
});

module.exports = mongoose.model('Cinema', CinemaSchema);
