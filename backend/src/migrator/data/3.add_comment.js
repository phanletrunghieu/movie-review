const mongoose = require('mongoose')
const config = require('../../config')
const Comment = require(config.models_dir + '/mongo/comment')

exports.up = ()=>{
	return Comment.create([
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a21"),
            body: "Rat hay",
            star: 5,
            user: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a7c"),
            owner: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a23"),
            onModel: "Film",
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a22"),
            body: "Hay lam",
            star: 4,
            user: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a7d"),
            owner: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a23"),
            onModel: "Film",
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a23"),
            body: "Phim rat do. Dung xem phi tien.",
            star: 1,
            user: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a7e"),
            owner: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a23"),
            onModel: "Film",
        },
    ])
}
exports.down = ()=>{
	return Promise.all([
        Comment.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a21")}),
        Comment.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a22")}),
        Comment.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a23")}),
    ])
}