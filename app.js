'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let routes = require('./routes');
let models = require('./models');
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
routes.initialize(app, models);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

models.sequelize.sync().then(() => {
  let server = app.listen(process.env.PORT || 3000, () => {
    let host = server.address();
    console.log('API running at http://%s:%s', host.address, host.port);
  });
});
