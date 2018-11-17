const mongoose = require('mongoose')
const config = require('../../config')
const User = require(config.models_dir + '/mongo/user')
exports.up = ()=>{
    return User.create([
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a7c"),
            username: "demo",
            full_name: "Hieu Dep Trai",
            password: "$2b$10$H9kszmlm8sbYOs6ZL951eu3ikXEGtExyAsqWYRFsXAH6xQGkKyuIG",
        }
    ])
}
exports.down = ()=>{
	return User.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a7c")})
}