var config = require('../../../../config');
var multer = require('multer');
var path = require('path');
var fs = require('fs');
var uuidv1 = require('uuid/v1');
var sharp = require('sharp');
sharp.cache(false);

var response_express = require(config.library_dir+'/response').response_express;
var User = require(config.models_dir + '/mongo/user');

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    //prepare dir
    var path='temp';
    if(!fs.existsSync(path)){
    	fs.mkdirSync(path);
    }

    path+='/images';
    if(!fs.existsSync(path)){
    	fs.mkdirSync(path);
    }

    callback(null, path);
  },
  filename: function (req, file, cb) {
    var ext=path.extname(file.originalname);
    cb(null, uuidv1() + ext)
  }
})
var upload = multer({
  storage: storage,
  fileFilter: (req, file, callback)=>{
    //check ext
    var ext = path.extname(file.originalname);
    if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
      return callback(new Error('Only images are allowed'))
    }

    //check mimetype
    if(!file.mimetype.match(/image.*/)){
      return callback(new Error('Only images are allowed'))
    }

    callback(null, true);
  },
});

module.exports = function(req, res) {
  upload.single('avatar')(req, res, function (err){
		if(err){
			return response_express.exception(res, err.message || err);
    }

    if (!req.file) {
      return response_express.exception(res, 'Miss params: avatar');
    }

    //prepare dir
    var newPath='public';
    if(!fs.existsSync(newPath)){
    	fs.mkdirSync(newPath);
    }

    newPath+='/uploads';
    if(!fs.existsSync(newPath)){
    	fs.mkdirSync(newPath);
    }

    newPath+='/images';
    if(!fs.existsSync(newPath)){
    	fs.mkdirSync(newPath);
    }

    var current=new Date();
    newPath+='/'+current.getFullYear();
    if(!fs.existsSync(newPath)){
    	fs.mkdirSync(newPath);
    }

    newPath+='/'+(current.getMonth() + 1);
    if(!fs.existsSync(newPath)){
    	fs.mkdirSync(newPath);
    }

    newPath += '/' + req.file.filename;

    sharp(req.file.path)
    .resize(600, 600)
    //.max()
    .toFile(newPath, function (err) {
      if(err){
        fs.unlinkSync(req.file.path);
        return response_express.exception(res, err.message || err);
      }

      //delete temp file
      fs.unlinkSync(req.file.path);

      var publicUrl=config.server_url + newPath.substring(newPath.indexOf('/'));

      User.findOne({_id: req.token_info._id})
      .then(user_info=>{
        if(user_info && user_info.avatar){
          let oldPath = 'public' + user_info.avatar.substring(config.server_url.length);
          fs.unlink(oldPath, ()=>{});
        }

        user_info.avatar = publicUrl;
        return user_info.save();
      })
      .then(result=>{
        if(result.changedRows<=0){
          return Promise.reject("User is not exist");
        }

        response_express.success(res, {url: publicUrl});
      })
      .catch(err=>{
        fs.unlinkSync(newPath);
        response_express.exception(res, err.message || err);
      });
    });
	});
};
