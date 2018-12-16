var config = require('../../../../config');
var response_express = require(config.library_dir+'/response').response_express;
var lib_common = require(config.library_dir+'/common');
var User = require(config.models_dir + '/mongo/user');
var Film = require(config.models_dir + '/mongo/film');
var Comment = require(config.models_dir + '/mongo/comment');

exports.list = (req, res)=>{
    let film_id = req.params.film_id

    let comments = []
    Comment.find({
        owner: film_id,
        onModel: "Film"
    })
    .populate('user')
    .then(cs=>{
        comments = cs
        let listPromise = []
        for (let i = 0; i < comments.length; i++) {
            listPromise.push(new Promise((resolve, reject)=>{
                Comment.find({
                    owner: comments[i]._id,
                    onModel: "Comment"
                })
                .then(cms=>{
                    comments[i].comments = cms
                    resolve()
                })
                .catch(err=>reject(err))
            }))
        }
        return Promise.all(listPromise)
    })
    .then(()=>{
        return response_express.success(res, comments)
    })
    .catch(err=>response_express.exception(res, err.message || err))
}

exports.create = (req, res)=>{
    let miss=lib_common.checkMissParams(res, req.body, ["comment", "owner", "onModel", "star"])
    if (miss) return

    let comment = {
        body: req.body.comment,
        star: req.body.star,
        owner: req.body.owner,
        onModel: req.body.onModel || "Film",
        user: req.token_info._id,
    }

    Comment.create(comment)
    .then(comment=>{
        return response_express.success(res, comment)
    })
    .catch(err=>response_express.exception(res, err.message || err))
}

exports.delete = (req, res)=>{
    let comment_id = req.params.comment_id

    Comment.deleteOne({_id: comment_id})
    .then(()=>{
        response_express.success(res)
    })
    .catch(err=>response_express.exception(res, err.message || err))
}

exports.update = (req, res)=>{
    let comment_id = req.params.comment_id

    Comment.findById(comment_id)
    .then(comment=>{
        if (!comment) {
            return Promise.reject("comment not exist")
        }

        Object.assign(comment, req.body.comment)

        return comment.save()
    })
    .then(comment=>{
        response_express.success(res, comment)
    })
    .catch(err=>response_express.exception(res, err.message || err))
}