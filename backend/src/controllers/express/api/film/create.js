var config = require('../../../../config');
var response_express = require(config.library_dir+'/response').response_express;
var lib_common = require(config.library_dir+'/common');
var lib_password = require(config.library_dir+'/password');
var Film = require(config.models_dir + '/mongo/film');

module.exports = (req, res)=>{
    let miss=lib_common.checkMissParams(res, req.body, ["film"])
    if (miss) return

    Film.create(req.body.film)
    .then(film=>{
        response_express.success(res, film)
    })
    .catch(err=>response_express.exception(res, err.message))
}
