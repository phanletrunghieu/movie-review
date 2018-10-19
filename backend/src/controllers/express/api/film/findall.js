var config = require('../../../../config');
var response_express = require(config.library_dir+'/response').response_express;
var Film = require(config.models_dir + '/mongo/film');

module.exports = (req, res)=>{
    Film.find({})
        .then(films=>{
            response_express.success(res, films)
        })
        .catch(err=>response_express.exception(res, err.message))
}
