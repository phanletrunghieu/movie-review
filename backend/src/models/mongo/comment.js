var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CommentSchema = new mongoose.Schema({
    body: {
        type: String,
        trim: true,
        required: true,
    },
    star: {
        type: Number,
        required: true,
        default: 5,
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    owner: {
        type: Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel'
    },
    onModel: {
        type: String,
        required: true,
        enum: ['Comment', 'Film']
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

CommentSchema.pre('save', next => {
    if (this.isNew || this.isModified) {
        this.date_updated = Date.now();
    }
    return next();
});

module.exports = mongoose.model('Comment', CommentSchema);
