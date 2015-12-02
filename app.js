'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const models = require('./models');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
routes.initialize(app, models);

const server = app.listen(process.env.PORT || 3000, () => {
  const host = server.address();
  console.log('API running at http://%s:%s', host.address, host.port);
});
