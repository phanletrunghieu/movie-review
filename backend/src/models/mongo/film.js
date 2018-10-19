var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FilmSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    poster: {
        type: String,
        trim: true,
    },
    trailers: {
        type: [String]
    },
    date_created: {
        type: Date,
        default: Date.now
    },
    date_updated: {
        type: Date,
        default: Date.now
    }
});

FilmSchema.pre('save', next=>{
    if (this.isNew || this.isModified) {
        this.date_updated = Date.now();
    }
    return next();
});

module.exports = mongoose.model('Film', FilmSchema);
