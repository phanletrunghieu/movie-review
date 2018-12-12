var config = require('../../../../config');
var express = require('express');

var authRoutes = express.Router();

authRoutes.post("/verify_token", require('./verify_token'))
authRoutes.post("/signin", require('./signin'))
authRoutes.post("/signup", require('./signup'))

module.exports = authRoutes;