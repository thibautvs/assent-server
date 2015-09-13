'use strict';

module.exports = function (app, models, HttpStatus) {
  let Student = models.Student;

  app.get('/students', function (req, res, next) {
    Student
      .all()
      .then(function (data) { res.send({students: data}); })
      .catch(function (err) { next(err); });
  });

  app.post('/students', function (req, res, next) {
    Student
      .findOne({where: {email: req.body.email}})
      .then(function (data) {
        if (data === null) {
          Student
            .create({email: req.body.email})
            .then(function (data) { res.status(HttpStatus.CREATED).send({id: data.id}); })
            .catch(function (err) { next(err); });
        } else {
          res.sendStatus(HttpStatus.CONFLICT);
        }
      })
      .catch(function (err) { next(err); });
  });
};
