'use strict';

var express = require('express');
var cors = require('cors');
var routes = require('./routes');
var app = express();

app.use(cors());
routes(app);

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address();
  console.log('API running at http://%s:%s', host.address, host.port);
});
