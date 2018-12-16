var config = require('../../../../config');
var express = require('express');

var genreRoutes = express.Router();

genreRoutes.post("/", require('./create'))
genreRoutes.delete("/:genre_id", require('./delete'))
genreRoutes.put("/:genre_id", require('./update'))

let find = require('./find')
genreRoutes.get("/", find.findAll)
genreRoutes.get("/home", find.home)
genreRoutes.get("/:genre_id", find.byID)

module.exports = genreRoutes;
