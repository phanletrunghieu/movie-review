var config = require('../../../../config');
var express = require('express');

var filmRoutes = express.Router();

filmRoutes.get("/", require('./findall'))
filmRoutes.post("/", require('./create'))
filmRoutes.get("/:film_id", require('./find'))
filmRoutes.delete("/:film_id", require('./delete'))
filmRoutes.put("/:film_id", require('./update'))

module.exports = filmRoutes;
