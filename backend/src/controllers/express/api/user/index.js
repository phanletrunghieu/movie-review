var config = require('../../../../config');
var express = require('express');

var userRoutes = express.Router();


// apiRoutes.use('/', require('./v1'));
// apiRoutes.use('/v1', require('./v1'));

userRoutes.get("/", require('./findall'))
userRoutes.post("/", require('./create'))
userRoutes.post('/upload-avatar', require('./upload_avatar'));
userRoutes.put('/:user_id/change-password', require('./change_password'));
userRoutes.get("/:user_id", require('./find'))
userRoutes.delete("/:user_id", require('./delete'))
userRoutes.put("/:user_id", require('./update'))

const like_film = require('./like_film')
userRoutes.get("/:user_id/like_film", like_film.get)
userRoutes.post("/:user_id/like_film", like_film.like)
userRoutes.delete("/:user_id/like_film", like_film.unlike)

const favorite_film = require('./favorite_film')
userRoutes.get("/:user_id/favorite_film", favorite_film.get)
userRoutes.post("/:user_id/favorite_film", favorite_film.favorite)
userRoutes.delete("/:user_id/favorite_film", favorite_film.unfavorite)

module.exports = userRoutes;
