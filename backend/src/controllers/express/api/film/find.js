var config = require('../../../../config');
var response_express = require(config.library_dir+'/response').response_express;
var Film = require(config.models_dir + '/mongo/film');
var Comment = require(config.models_dir + '/mongo/comment');

exports.byID = (req, res)=>{
    let film_id = req.params.film_id
    Promise.all([
        Comment.find({owner: film_id}),
        Film.findOne({_id: film_id}),
    ])
    .then(results=>{
        comments = results[0]
        film = results[1].toObject()

        if (!film) {
            return Promise.reject("film not exist")
        }

        let star = 0
        comments.forEach(cmt => {
            star += cmt.star
        })
        star /= comments.length

        film.star = star

        response_express.success(res, film)
    })
    .catch(err=>response_express.exception(res, err.message))
}

exports.top = (req, res)=>{
    Film.find({is_top: true})
    .then(films=>response_express.success(res, films))
    .catch(err=>response_express.exception(res, err.message))
}

exports.highRate = (req, res)=>{
    // TODO: optimize code
    Film.find({})
    .then(films=>{
        let listPromise = []
        films.forEach(film => {
            listPromise.push(
                new Promise((resolve, reject) => {
                    Comment.find({owner: film._id})
                    .then(comments=>{
                        film = film.toObject()
        
                        let star = 0
                        comments.forEach(cmt => {
                            star += cmt.star
                        })
                        star /= comments.length
        
                        film.star = star
                        resolve(film)
                    })
                    .catch(err=>reject(err))
                })
            )
        });
        
        return Promise.all(listPromise)
    })
    .then(films=>{
        films.sort((a, b)=>b.star - a.star)
        response_express.success(res, films.slice(0, 10))
    })
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

exports.search = (req, res)=>{
    let keyword = req.query.s
    Film.find({name: new RegExp(keyword, 'i')})
    .then(films=>{
        response_express.success(res, films)
    })
    .catch(err=>response_express.exception(res, err.message))
}