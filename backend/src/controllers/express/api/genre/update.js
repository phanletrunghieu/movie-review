var config = require('../../../../config');
var response_express = require(config.library_dir+'/response').response_express;
var Genre = require(config.models_dir + '/mongo/genre');

module.exports = (req, res)=>{
    let genre_id = req.params.genre_id
    Genre.findById(genre_id)
        .then(genre=>{
            if (!genre) {
                return Promise.reject("genre not exist")
            }

            Object.assign(genre, req.body.genre)

            return genre.save()
        })
        .then(genre=>{
            response_express.success(res, genre)
        })
        .catch(err=>response_express.exception(res, err.message))
}
