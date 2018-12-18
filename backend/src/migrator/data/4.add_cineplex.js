const mongoose = require('mongoose')
const config = require('../../config')
const Cineplex = require(config.models_dir + '/mongo/cineplex')

exports.up = ()=>{
    return Cineplex.create([
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036125ad43e5a81"),
            name: "CineStar",
            logo: "https://s3img.vcdn.vn/123phim/2018/09/1721cfa98768f300c03792e25ceb0191.png",
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036125ad43e5a82"),
            name: "BHD Star",
            logo: "https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png",
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036125ad43e5a83"),
            name: "Galaxy",
            logo: "https://s3img.vcdn.vn/123phim/2018/09/e520781386bd5436e94d6e15e193a005.png",
        },
    ])
}

exports.down = ()=>{
    return Promise.all([
        Cineplex.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036125ad43e5a81")}),
        Cineplex.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036125ad43e5a82")}),
        Cineplex.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036125ad43e5a83")}),
    ])
}
