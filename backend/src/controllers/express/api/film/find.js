var config = require('../../../../config');
var response_express = require(config.library_dir+'/response').response_express;
var Film = require(config.models_dir + '/mongo/film');

exports.byID = (req, res)=>{
    let film_id = req.params.film_id
    Film.findOne({_id: film_id})
        .then(film=>{
            if (!film) {
                return Promise.reject("film not exist")
            }
            response_express.success(res, film)
        })
        .catch(err=>response_express.exception(res, err.message))
}

exports.top = (req, res)=>{
    Film.find({is_top: true})
        .then(films=>response_express.success(res, films))
        .catch(err=>response_express.exception(res, err.message))
}

exports.findAll = (req, res)=>{
    Film.find({})
        .then(films=>response_express.success(res, films))
        .catch(err=>response_express.exception(res, err.message))
}

exports.byGenre = (req, res)=>{
    let genreID = req.params.genre_id
    Film.find({genre: genreID})
        .then(films=>response_express.success(res, films))
        .catch(err=>response_express.exception(res, err.message))
}
