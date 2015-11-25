'use strict';

const bcrypt = require('bcrypt');
const validator = require('../utils/validator');
const workFactor = 10;

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const User = models.User;
  const StudentProfile = models.StudentProfile;

  app.get('/users', (req, res, next) => {
    return res.send({ user: { id: 1, email: 'vladimir@kremlin.ru' }});
  });

  app.post('/users', (req, res, next) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;

    let isValid = validator.isValid([
      validator.required(firstName),
      validator.required(lastName),
      validator.required(email),
      validator.email(email),
      validator.required(password),
      validator.password(password)
    ]);

    if (isValid) {
      email = email.toLowerCase();
      User
        .findOne({where: {email: email}})
        .then(data => {
          if (data === null) {
            createUser(firstName, lastName, email, password, res, next);
          } else {
            res.status(HttpStatus.CONFLICT).send({error: 'email_already_exists'});
          }
        })
        .catch(err => next(err));
    } else {
      res.status(HttpStatus.BAD_REQUEST).send({error: 'validation_failed'});
    }
  });

  function createUser(firstName, lastName, email, password, res, next) {
    StudentProfile
      .create({
        firstName: firstName,
        lastName: lastName
      })
      .then(data => {
        bcrypt.genSalt(workFactor, (err, salt) => {
          if (err) { next(err); }
          else {
            bcrypt.hash(password, salt, (err, hash) => {
              if (err) { next(err); }
              else {
                User
                  .create({
                    studentProfileId: data.id,
                    email: email,
                    password: hash
                  })
                  .then(data => res.status(HttpStatus.CREATED).send({id: data.id}))
                  .catch(err => next(err));
              }
            });
          }
        });
      })
      .catch(err => next(err));
  }
};
