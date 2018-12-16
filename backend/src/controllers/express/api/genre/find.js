var config = require('../../../../config');
var response_express = require(config.library_dir+'/response').response_express;
var Genre = require(config.models_dir + '/mongo/genre');

exports.byID = (req, res)=>{
    let genre_id = req.params.genre_id
    Genre.findOne({_id: genre_id})
        .then(genre=>{
            if (!genre) {
                return Promise.reject("genre not exist")
            }
            response_express.success(res, genre)
        })
        .catch(err=>response_express.exception(res, err.message))
}

exports.home = (req, res)=>{
    Genre.find({is_home: true})
        .then(genres=>response_express.success(res, genres))
        .catch(err=>response_express.exception(res, err.message))
}

exports.findAll = (req, res)=>{
    Genre.find({})
        .then(genres=>response_express.success(res, genres))
        .catch(err=>response_express.exception(res, err.message))
}
