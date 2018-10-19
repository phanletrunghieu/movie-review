var config = require('../../../../config');
var response_express = require(config.library_dir+'/response').response_express;
var Film = require(config.models_dir + '/mongo/film');

module.exports = (req, res)=>{
    let film_id = req.params.film_id
    Film.deleteOne({_id: film_id})
        .then(()=>{
            response_express.success(res)
        })
        .catch(err=>response_express.exception(res, err.message))
}
