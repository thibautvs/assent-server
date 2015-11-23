'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  app.post('/token', (req, res, next) => {
    if (req.body.grant_type === 'password') {
      if (req.body.username === 'login' && req.body.password === 'ok') {
        res.send({ access_token: 'secret token' });
      } else {
        res.status(HttpStatus.BAD_REQUEST).send({ error: 'invalid_grant' });
      }
    } else {
      res.status(HttpStatus.BAD_REQUEST).send({ error: 'unsupported_grant_type' });
    }
  });
};
