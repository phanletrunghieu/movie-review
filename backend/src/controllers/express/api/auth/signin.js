var config = require('../../../../config');
var response_express = require(config.library_dir+'/response').response_express;
var lib_common = require(config.library_dir+'/common');
var lib_password = require(config.library_dir+'/password');
var User = require(config.models_dir + '/mongo/user');

module.exports = (req, res)=>{
    let miss=lib_common.checkMissParams(res, req.body, ["username", "password"])
    if (miss) return

    let user;
    User.findOne({username: req.body.username})
    .then(u=>{
        user = u
        if (!user) {
            return Promise.reject("user not exist")
        }

        return lib_password.comparePassword(req.body.password, user.password)
    })
    .then(check=>{
        if(!check){
            return Promise.reject("wrong password")
        }
        let token = lib_common.createToken(user)
        response_express.success(res, {token})
    })
    .catch(err=>response_express.exception(res, err.message || err))
}