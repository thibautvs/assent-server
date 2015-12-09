'use strict';

const express = require('express');
const https = require('https');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const routes = require('./routes');
const models = require('./models');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
routes.initialize(app, models);

const options = {
  key: fs.readFileSync(path.join(__dirname, 'ssl', 'api_assent_io.key'), 'utf8'),
  cert: fs.readFileSync(path.join(__dirname, 'ssl', 'api_assent_io.crt'), 'utf8')
};
const server = https.createServer(options, app).listen(443, null, null, () => {
  console.log('API listening on port %d in %s mode', server.address().port, app.settings.env);
});
