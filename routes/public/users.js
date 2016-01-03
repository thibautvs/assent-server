'use strict';

const bcrypt = require('bcrypt');
const RSVP = require('rsvp');
const HttpStatus = require('http-status');
const workFactor = 10;

module.exports = (app, models, validator, sequelizeUtils, httpResponseUtils) => {
  const User = models.User;
  const InviteCode = models.InviteCode;
  const StudentProfile = models.StudentProfile;

  app.post('/users', (req, res, next) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;
    let inviteCode = req.body.inviteCode;
    let isValid = validateCreateUserFields(firstName, lastName, email, password, inviteCode);

    if (isValid) {
      email = email.toLowerCase();
      User
        .findOne({where: {email: email}})
        .then(data => {
          if (data === null) {
            InviteCode
              .update({inUse: true}, {where: {code: inviteCode, inUse: false}})
              .then(data => {
                let affectedRows = data[0];
                if (affectedRows === 1) {
                  createUser(firstName, lastName, email, password, res, next);
                } else {
                  httpResponseUtils.conflict(res, 'invalid_invite_code');
                }
              })
              .catch(err => next(err));
          } else {
            httpResponseUtils.conflict(res, 'email_already_exists');
          }
        })
        .catch(err => next(err));
    } else {
      httpResponseUtils.validationFailed(res);
    }
  });

  app.put('/users/:id', (req, res, next) => {
    let userId = req.params.id;
    let currentPassword = req.body.currentPassword;
    let newPassword = req.body.newPassword;
    let isValid = validator.isValid([
      validator.required(userId),
      validator.required(currentPassword),
      validator.required(newPassword),
      validator.password(newPassword)
    ]);

    if (isValid) {
      User
        .findOne({where: {id: userId}})
        .then(data => {
          bcrypt.compare(currentPassword, data.password, (err, isMatch) => {
            if (err) { next(err); }
            else if (isMatch) {
              hashPassword(newPassword).then(hash => {
                User
                  .update({password: hash}, {where: {id: userId}})
                  .then(data => res.sendStatus(HttpStatus.NO_CONTENT))
                  .catch(err => next(err));
              }, err => next(err));
            } else {
              httpResponseUtils.badRequest(res, 'invalid_password');
            }
          });
        })
        .catch(err => next(err));
    } else {
      httpResponseUtils.validationFailed(res);
    }
  });

  function validateCreateUserFields(firstName, lastName, email, password, inviteCode) {
    return validator.isValid([
      validator.required(firstName),
      validator.required(lastName),
      validator.required(email),
      validator.email(email),
      validator.required(password),
      validator.password(password),
      validator.required(inviteCode)
    ]);
  }

  function createUser(firstName, lastName, email, password, res, next) {
    StudentProfile
      .create({
        firstName: firstName,
        lastName: lastName,
        country_id: 1,
        university_id: 1
      })
      .then(data => {
        hashPassword(password).then(hash => {
          User
           .create({
             studentProfileId: data.id,
             email: email,
             password: hash
           })
           .then(data => res.status(HttpStatus.CREATED).send({id: data.id}))
           .catch(err => next(err));
        }, err => next(err));
      })
      .catch(err => next(err));
  }

  function hashPassword(password) {
    return new RSVP.Promise((resolve, reject) => {
      bcrypt.genSalt(workFactor, (err, salt) => {
        if (err) { reject(err); }
        else {
          bcrypt.hash(password, salt, (err, hash) => {
            if (err) { reject(err); }
            else {
              resolve(hash);
            }
          });
        }
      });
    });
  }
};
