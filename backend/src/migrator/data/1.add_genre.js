const mongoose = require('mongoose')
const config = require('../../config')
const Genre = require(config.models_dir + '/mongo/genre')

exports.up = ()=>{
    return Genre.create([
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a81"),
            name: "Action",
            is_home: true,
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a82"),
            name: "Drama",
            is_home: true,
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a83"),
            name: "Adventure",
            is_home: true,
        },
    ])
}

exports.down = ()=>{
    return Promise.all([
        Genre.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a81")}),
        Genre.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a82")}),
        Genre.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a83")}),
    ])
}
