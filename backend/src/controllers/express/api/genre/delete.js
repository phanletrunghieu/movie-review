var config = require('../../../../config');
var response_express = require(config.library_dir+'/response').response_express;
var Genre = require(config.models_dir + '/mongo/genre');

module.exports = (req, res)=>{
    let genre_id = req.params.genre_id
    Genre.deleteOne({_id: genre_id})
        .then(()=>{
            response_express.success(res)
        })
        .catch(err=>response_express.exception(res, err.message))
}
