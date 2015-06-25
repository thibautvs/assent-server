'use strict';

var express = require('express');
var routes = require('./routes');
var app = express();
var port = process.env.PORT || 3000;
routes(app);

var server = app.listen(port, function () {
  var host = server.address();
  console.log('API running at http://%s:%s', host.address, host.port);
});
