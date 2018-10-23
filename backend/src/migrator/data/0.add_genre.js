const mongoose = require('mongoose')
const config = require('../../config')
const Genre = require(config.models_dir + '/mongo/genre')

exports.up = ()=>{
	  return Genre.create([
            {
                _id: mongoose.Types.ObjectId("5bcf03c89036025ad45d5a7c"),
                name: "Action",
            },
            {
                _id: mongoose.Types.ObjectId("5bcf03c89036025ad45d5a7d"),
                name: "Drama",
            }
        ])
}

exports.down = ()=>{
    return Promise.all([
        Genre.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036025ad45d5a7c")}),
        Genre.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036025ad45d5a7d")})
    ])
}
