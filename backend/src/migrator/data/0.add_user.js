const mongoose = require('mongoose')
const config = require('../../config')
const User = require(config.models_dir + '/mongo/user')
exports.up = ()=>{
    return User.create([
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a7c"),
            username: "demo",
            full_name: "Demo",
            password: "$2b$10$Bs4cHI0K.Z2vbE/Npd8kmu6G.1ZoZQhCg9VC9ofCzYOSmkwdxU7GW",
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a7d"),
            username: "demo1",
            full_name: "Demo 1",
            password: "$2b$10$Bs4cHI0K.Z2vbE/Npd8kmu6G.1ZoZQhCg9VC9ofCzYOSmkwdxU7GW",
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a7e"),
            username: "demo2",
            full_name: "Demo 2",
            password: "$2b$10$Bs4cHI0K.Z2vbE/Npd8kmu6G.1ZoZQhCg9VC9ofCzYOSmkwdxU7GW",
        },
    ])
}
exports.down = ()=>{
	return Promise.all([
        User.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a7c")}),
        User.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a7d")}),
        User.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a7e")})
    ])
}