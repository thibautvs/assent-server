'use strict';

const bcrypt = require('bcrypt');
const validator = require('../utils/validator');

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const User = models.User;

  app.post('/token', (req, res, next) => {
    if (req.body.grant_type === 'password') {
      let email = req.body.username;
      let password = req.body.password;
      let isValid = validate(email, password);

      if (isValid) {
        User
          .findOne({where: {email: email.toLowerCase()}})
          .then(data => {
            if (data !== null) {
              bcrypt.compare(password, data.password, (err, isMatch) => {
                if (err) { next(err); }
                else if (isMatch) {
                  res.send({access_token: 'secret token'});
                } else {
                  invalidCredentials(res);
                }
              });
            } else {
              invalidCredentials(res);
            }
          })
          .catch(err => next(err));
      } else {
        invalidCredentials(res);
      }
    } else {
      res.status(HttpStatus.BAD_REQUEST).send({error: 'unsupported_grant_type'});
    }
  });

  function validate(email, password) {
    return validator.isValid([
      validator.required(email),
      validator.email(email),
      validator.required(password),
      /* don't validate password format otherwise if changed,
         existing users won't be able to log in */
    ]);
  }

  function invalidCredentials(res) {
    res.status(HttpStatus.BAD_REQUEST).send({error: 'invalid_grant'});
  }
};
