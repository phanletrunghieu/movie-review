const mongoose = require('mongoose')
const config = require('../../config')
const CinemaSession = require(config.models_dir + '/mongo/cinema_session')

exports.up = ()=>{
    return CinemaSession.create([
        //cinema 1
        {
            _id: mongoose.Types.ObjectId("5bcf03c89136125ad43e5a81"),
            film: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a23"),
            cinema: mongoose.Types.ObjectId("5bcf03c89036425ad43e5a81"),
            date: new Date(0,0,0,9,45),
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89136125ad43e5a82"),
            film: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a23"),
            cinema: mongoose.Types.ObjectId("5bcf03c89036425ad43e5a81"),
            date: new Date(0,0,0,16,15),
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89136125ad43e5a83"),
            film: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a23"),
            cinema: mongoose.Types.ObjectId("5bcf03c89036425ad43e5a81"),
            date: new Date(0,0,0,18,45),
        },

        //cinema 2
        {
            _id: mongoose.Types.ObjectId("5bcf03c89136125ad43e5a84"),
            film: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a23"),
            cinema: mongoose.Types.ObjectId("5bcf03c89036425ad43e5a82"),
            date: new Date(0,0,0,9,45),
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89136125ad43e5a85"),
            film: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a23"),
            cinema: mongoose.Types.ObjectId("5bcf03c89036425ad43e5a82"),
            date: new Date(0,0,0,16),
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89136125ad43e5a86"),
            film: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a23"),
            cinema: mongoose.Types.ObjectId("5bcf03c89036425ad43e5a82"),
            date: new Date(0,0,0,18,15),
        },

        //cinema 3
        {
            _id: mongoose.Types.ObjectId("5bcf03c89136125ad43e5a87"),
            film: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a23"),
            cinema: mongoose.Types.ObjectId("5bcf03c89036425ad43e5a83"),
            date: new Date(0,0,0,9),
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89136125ad43e5a88"),
            film: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a23"),
            cinema: mongoose.Types.ObjectId("5bcf03c89036425ad43e5a83"),
            date: new Date(0,0,0,11,30),
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89136125ad43e5b00"),
            film: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a23"),
            cinema: mongoose.Types.ObjectId("5bcf03c89036425ad43e5a83"),
            date: new Date(0,0,0,18,15),
        },

        //cinema 4
        {
            _id: mongoose.Types.ObjectId("5bcf03c89136125ad43e5b01"),
            film: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a23"),
            cinema: mongoose.Types.ObjectId("5bcf03c89036425ad43e5a84"),
            date: new Date(0,0,0,9),
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89136125ad43e5b02"),
            film: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a23"),
            cinema: mongoose.Types.ObjectId("5bcf03c89036425ad43e5a84"),
            date: new Date(0,0,0,11,30),
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89136125ad43e5b03"),
            film: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a23"),
            cinema: mongoose.Types.ObjectId("5bcf03c89036425ad43e5a84"),
            date: new Date(0,0,0,18,15),
        },
    ])
}

exports.down = ()=>{
    return Promise.all([
        CinemaSession.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89136125ad43e5a81")}),
        CinemaSession.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89136125ad43e5a82")}),
        CinemaSession.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89136125ad43e5a83")}),
        CinemaSession.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89136125ad43e5a84")}),
        CinemaSession.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89136125ad43e5a85")}),
        CinemaSession.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89136125ad43e5a86")}),
        CinemaSession.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89136125ad43e5a88")}),
        CinemaSession.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89136125ad43e5b00")}),
        CinemaSession.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89136125ad43e5b01")}),
        CinemaSession.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89136125ad43e5b02")}),
        CinemaSession.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89136125ad43e5b03")}),
    ])
}
