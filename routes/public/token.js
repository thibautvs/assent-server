'use strict';

const bcrypt = require('bcrypt');

module.exports = (app, models, validator, sequelizeUtils, HttpStatus) => {
  const User = models.User;

  app.post('/token', (req, res, next) => {
    if (req.body.grant_type === 'password') {
      let email = req.body.username;
      let password = req.body.password;
      let isValid = validateCredentials(email, password);

      if (isValid) {
        User
          .findOne({where: {email: email.toLowerCase()}})
          .then(data => {
            if (data !== null) {
              bcrypt.compare(password, data.password, (err, isMatch) => {
                if (err) { next(err); }
                else if (isMatch) {
                  res.send({
                    userId: data.id,
                    studentProfileId: data.studentProfileId,
                    access_token: 'a1b09800-f8b6-4fb6-8e40-75ebd5744ab8'
                  });
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

  function validateCredentials(email, password) {
    return validator.isValid([
      validator.required(email),
      validator.required(password),
      /* don't validate email & password formats otherwise, if changed,
         existing users might not be able to log in */
    ]);
  }

  function invalidCredentials(res) {
    res.status(HttpStatus.BAD_REQUEST).send({error: 'invalid_grant'});
  }
};
