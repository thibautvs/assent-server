'use strict';

const bcrypt = require('bcrypt');
const utils = require('../utils');
const workFactor = 10;

module.exports = (app, models, HttpStatus) => {
  const User = models.User;

  app.post('/users', (req, res, next) => {
    // TODO validate password strength
    if (utils.nullOrEmpty(req.body.email)
      || utils.nullOrEmpty(req.body.firstName)
      || utils.nullOrEmpty(req.body.lastName)
      || utils.nullOrEmpty(req.body.password)) {
        res.status(HttpStatus.BAD_REQUEST).send({message: 'Missing mandatory fields'});
    } else {
      User
        .findOne({where: {email: req.body.email}})
        .then(data => {
          if (data === null) {
            createUser(req, res, next);
          } else {
            res.sendStatus(HttpStatus.CONFLICT);
          }
        })
        .catch(err => next(err));
    }
  });
};

function createUser(req, res, next) {
  bcrypt.genSalt(workFactor, (err, salt) => {
    if (err) { next(err); }
    else {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) { next(err); }
        else {
          let user = {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: hash
          };

          User
            .create(user)
            .then(data => res.status(HttpStatus.CREATED).send({id: data.id}))
            .catch(err => next(err));
        }
      });
    }
  });
}
