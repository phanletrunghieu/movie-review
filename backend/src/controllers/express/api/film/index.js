var config = require('../../../../config');
var express = require('express');

var filmRoutes = express.Router();

filmRoutes.post("/", require('./create'))
filmRoutes.delete("/:film_id", require('./delete'))
filmRoutes.put("/:film_id", require('./update'))

let find = require('./find')
filmRoutes.get("/", find.findAll)
filmRoutes.get("/top", find.top)
filmRoutes.get("/high-rate", find.highRate)
filmRoutes.get("/search", find.search)
filmRoutes.get("/:film_id", find.byID)
filmRoutes.get("/by-genre/:genre_id", find.byGenre)

module.exports = filmRoutes;
