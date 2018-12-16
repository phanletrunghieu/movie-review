var config = require('../../../config');
var express = require('express');
var lib_middleware = require(config.library_dir + "/middleware");


var apiRoutes = express.Router();

// apiRoutes.use('/', require('./v1'));
// apiRoutes.use('/v1', require('./v1'));

apiRoutes.use("/auth", require('./auth'))

// middleware
apiRoutes.use(lib_middleware.expressMiddleware)

apiRoutes.use("/users", require('./user'))
apiRoutes.use("/films", require('./film'))
apiRoutes.use("/genres", require('./genre'))
apiRoutes.use("/comments", require('./comment'))

module.exports = apiRoutes;
