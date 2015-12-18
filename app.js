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

let options;
if (app.settings.env === 'development') {
  options = {
    key: fs.readFileSync(path.join(__dirname, 'ssl', 'dev', 'localhost.key'), 'utf8'),
    cert: fs.readFileSync(path.join(__dirname, 'ssl', 'dev', 'localhost.crt'), 'utf8'),
    ca: [ fs.readFileSync(path.join(__dirname, 'ssl', 'dev', 'ca.crt'), 'utf8') ]
  };
} else {
  options = {
    key: fs.readFileSync(path.join(__dirname, 'ssl', 'api_assent_io.key'), 'utf8'),
    cert: fs.readFileSync(path.join(__dirname, 'ssl', 'api_assent_io.crt'), 'utf8'),
    ca: [
      fs.readFileSync(path.join(__dirname, 'ssl', 'ca_bundle_part_01.crt'), 'utf8'),
      fs.readFileSync(path.join(__dirname, 'ssl', 'ca_bundle_part_02.crt'), 'utf8'),
      fs.readFileSync(path.join(__dirname, 'ssl', 'ca_bundle_part_03.crt'), 'utf8')
    ]
  };
}

const server = https.createServer(options, app).listen(443, null, null, () => {
  /* 443 is the HTTPS port so that it offers the convenience to omit the port in the URL
   * (api.assent.io instead of api.assent.io:3000 for example). However, ports below 1024
   * require root permissions, which is really bad practice for running an app. So, once the
   * server is started, we revert to the permissions of the user that used the SUDO command.
   */
  let uid = parseInt(process.env.SUDO_UID);
  if (uid) {
    process.setuid(uid);
  }
  console.log('API listening on port %d in %s mode', server.address().port, app.settings.env);
});
