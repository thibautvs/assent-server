'use strict';

var express = require('express');
var routes = require('./routes');
var app = express();
routes(app);

var server = app.listen(3000, function () {
  var host = server.address();
  console.log('API running at http://%s:%s', host.address, host.port);
});
