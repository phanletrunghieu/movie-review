var config = require('../../../../config');
var response_express = require(config.library_dir+'/response').response_express;
var Film = require(config.models_dir + '/mongo/film');

module.exports = (req, res)=>{
    let film_id = req.params.film_id
    Film.findById(film_id)
        .then(film=>{
            if (!film) {
                return Promise.reject("film not exist")
            }

            Object.assign(film, req.body.film)

            return film.save()
        })
        .then(film=>{
            response_express.success(res, film)
        })
        .catch(err=>response_express.exception(res, err.message))
}
