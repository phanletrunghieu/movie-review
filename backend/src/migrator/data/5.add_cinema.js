const mongoose = require('mongoose')
const config = require('../../config')
const Cinema = require(config.models_dir + '/mongo/cinema')

exports.up = ()=>{
    return Cinema.create([
        // cineplex 1
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036425ad43e5a81"),
            name: "Quốc Thanh",
            logo: "https://s3img.vcdn.vn/123phim/2018/09/cinestar-quoc-thanh-15379636956745.jpg",
            address: "271 Nguyễn Trãi, Q.1",
            cineplex: mongoose.Types.ObjectId("5bcf03c89036125ad43e5a81"),
            location: {
                coordinates: [106.4838651, 10.7873636]
            },
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036425ad43e5a82"),
            name: "Hai Bà Trưng",
            logo: "https://s3img.vcdn.vn/123phim/2018/10/cinestar-hai-ba-trung-15383833704033.jpg",
            address: "135 Hai Bà Trưng, Bến Nghé, Q.1",
            cineplex: mongoose.Types.ObjectId("5bcf03c89036125ad43e5a81"),
            location: {
                coordinates: [106.695984, 10.7824593]
            },
        },

        // cineplex 2
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036425ad43e5a83"),
            name: "3/2",
            logo: "https://s3img.vcdn.vn/123phim/2018/09/bhd-star-vincom-3-2-15379527367766.jpg",
            address: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
            cineplex: mongoose.Types.ObjectId("5bcf03c89036125ad43e5a82"),
            location: {
                coordinates: [106.6786822, 10.7759967]
            },
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036425ad43e5a84"),
            name: "Bitexco",
            logo: "https://s3img.vcdn.vn/123phim/2018/09/bhd-star-bitexco-15379552241200.jpg",
            address: "L3-Bitexco Icon 68, 2 Hải Triều, Q.1",
            cineplex: mongoose.Types.ObjectId("5bcf03c89036125ad43e5a82"),
            location: {
                coordinates: [106.7022288, 10.7718212]
            },
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036425ad43e5a85"),
            name: "Phạm Hùng",
            logo: "https://s3img.vcdn.vn/123phim/2018/09/bhd-star-pham-hung-15379533093101.jpg",
            address: "L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh",
            cineplex: mongoose.Types.ObjectId("5bcf03c89036125ad43e5a82"),
            location: {
                coordinates: [106.6725058, 10.7336879]
            },
        },

        // cineplex 3
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036425ad43e5a86"),
            name: "Nguyễn Du",
            logo: "https://s3img.vcdn.vn/123phim/2018/09/galaxy-nguyen-du-15379626329832.jpg",
            address: "116 Nguyễn Du, Q.1",
            cineplex: mongoose.Types.ObjectId("5bcf03c89036125ad43e5a83"),
            location: {
                coordinates: [106.6907314, 10.7732524]
            },
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036425ad43e5a87"),
            name: "Tân Bình",
            logo: "https://s3img.vcdn.vn/123phim/2018/09/galaxy-tan-binh-15381063333729.jpg",
            address: "246 Nguyễn Hồng Đào, Tân Bình",
            cineplex: mongoose.Types.ObjectId("5bcf03c89036125ad43e5a83"),
            location: {
                coordinates: [106.6384791, 10.7907899]
            },
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036425ad43e5a88"),
            name: "Kinh Dương Vương",
            logo: "https://s3img.vcdn.vn/123phim/2018/09/galaxy-kinh-duong-vuong-15381065563489.jpg",
            address: "718bis Kinh Dương Vương, Q.6",
            cineplex: mongoose.Types.ObjectId("5bcf03c89036125ad43e5a83"),
            location: {
                coordinates: [106.6259739, 10.7504519]
            },
        },
    ])
}

exports.down = ()=>{
    return Promise.all([
        Cinema.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036425ad43e5a81")}),
        Cinema.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036425ad43e5a82")}),
        Cinema.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036425ad43e5a83")}),
        Cinema.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036425ad43e5a84")}),
        Cinema.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036425ad43e5a85")}),
        Cinema.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036425ad43e5a86")}),
        Cinema.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036425ad43e5a87")}),
        Cinema.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036425ad43e5a88")}),
    ])
}
