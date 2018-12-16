var config = require('../../../../config');
var User = require(config.models_dir + '/mongo/user');
var lib_password = require(config.library_dir+'/password');
var lib_common = require(config.library_dir+'/common');
var response_express = require(config.library_dir+'/response').response_express;

module.exports = (req, res)=>{
    let miss=lib_common.checkMissParams(res, req.body, ["oldPassword", "newPassword"])
    if (miss) return

    let user_id = req.params.user_id
    let user;
    User.findById(user_id)
    .then(u=>{
        user = u
        if (!user) {
            return Promise.reject("user not exist")
        }
        
        return lib_password.comparePassword(req.body.oldPassword, user.password)
    })
    .then(check=>{
        if(!check){
            return Promise.reject("wrong password")
        }

        return lib_password.cryptPassword(req.body.newPassword)
    })
    .then(passwordHash=>{
        user.password = passwordHash
        return user.save()
    })
    .then(user=>{
        response_express.success(res, user)
    })
    .catch(err=>response_express.exception(res, err.message || err))
}