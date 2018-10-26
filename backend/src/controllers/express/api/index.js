var config = require('../../../config');
var express = require('express');

var apiRoutes = express.Router();

// apiRoutes.use('/', require('./v1'));
// apiRoutes.use('/v1', require('./v1'));

apiRoutes.use("/users", require('./user'))
apiRoutes.use("/films", require('./film'))
apiRoutes.use("/genres", require('./genre'))

module.exports = apiRoutes;
