var config = require('../../../../config');
var response_express = require(config.library_dir+'/response').response_express;
var lib_common = require(config.library_dir+'/common');
var Genre = require(config.models_dir + '/mongo/genre');

module.exports = (req, res)=>{
    let miss=lib_common.checkMissParams(res, req.body, ["genre"])
    if (miss) return

    Genre.create(req.body.genre)
        .then(genre=>{
            response_express.success(res, genre)
        })
        .catch(err=>response_express.exception(res, err.message))
}
