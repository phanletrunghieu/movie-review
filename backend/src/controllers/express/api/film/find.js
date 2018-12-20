var config = require('../../../../config');
var response_express = require(config.library_dir+'/response').response_express;
var Film = require(config.models_dir + '/mongo/film');
var Comment = require(config.models_dir + '/mongo/comment');
var Cinema = require(config.models_dir + '/mongo/cinema');
var CinemaSession = require(config.models_dir + '/mongo/cinema_session');
var Cineplex = require(config.models_dir + '/mongo/cineplex');

exports.byID = (req, res)=>{
    let film_id = req.params.film_id
    Promise.all([
        Comment.find({owner: film_id}),
        Film.findOne({_id: film_id}),
        CinemaSession.find({film: film_id}).populate('cinema'),
        Cineplex.find({}),
    ])
    .then(results=>{
        comments = results[0]
        film = results[1].toObject()
        sessions = results[2]
        cineplexs = results[3]

        if (!film) {
            return Promise.reject("film not exist")
        }

        // calculate star
        let star = 0
        comments.forEach(cmt => {
            star += cmt.star
        })
        star /= comments.length

        film.star = star

        // get cinema session
        film.cineplexs=[]
        for (let i = 0; i < sessions.length; i++) {
            let cinemaId = sessions[i].cinema._id
            let cineplexId = sessions[i].cinema.cineplex

            // check `cineplex` in `film`
            let cineplexIndex = film.cineplexs.findIndex(c=>c._id.equals(cineplexId))
            if (cineplexIndex==-1) {
                // `cineplex` not exist in `film`
                let cineplexFind = cineplexs.find(cp=>cp._id.equals(cineplexId))
                cineplexFind = cineplexFind.toObject()
                cineplexFind.cinemas = []
                film.cineplexs.push(cineplexFind)
                cineplexIndex = film.cineplexs.length - 1
            }

            // check `cinema` in `film.cineplexs`
            let cinemaIndex = film.cineplexs[cineplexIndex].cinemas.findIndex(c=>c._id.equals(cinemaId))
            if (cinemaIndex==-1) {
                let cinema = sessions[i].cinema.toObject()
                cinema.sessions = []
                film.cineplexs[cineplexIndex].cinemas.push(cinema)
                cinemaIndex = film.cineplexs[cineplexIndex].cinemas.length - 1
            }

            // add session
            let session = sessions[i].toObject()
            delete session.cinema
            film.cineplexs[cineplexIndex].cinemas[cinemaIndex].sessions.push(session)
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