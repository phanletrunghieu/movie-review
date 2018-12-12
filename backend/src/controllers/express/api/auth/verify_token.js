var jwt = require('jsonwebtoken');
var config = require('../../../../config');
var lib_common = require(config.library_dir+'/common');
var response_express = require(config.library_dir+'/response').response_express;

module.exports = (req, res)=>{
    let miss=lib_common.checkMissParams(res, req.body, ["token"])
    if (miss) return

    var decoded=jwt.verify(req.body.token, config.secret);
    if (decoded == undefined) {
        return response_express.exception(res, "Failed to authenticate token.")
    }

    response_express.success(res, decoded)
}