var express = require('express');

var routes = express.Router();

const comment = require('./crud.js')
routes.post("/", comment.create)
routes.delete("/:comment_id", comment.delete)
routes.put("/:comment_id", comment.update)
routes.get("/:film_id", comment.list)

module.exports = routes;
