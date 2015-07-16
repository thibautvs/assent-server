'use strict';

module.exports = function (app, models, HttpStatus) {
  var Student = models.Student;

  app.get('/students', function (req, res, next) {
    Student
      .all()
      .then(function (data) {
        res.send(data);
      })
      .catch(function (err) {
        next(err);
      });
  });

  app.post('/students', function (req, res, next) {
    Student
      .findOrCreate({where: {email: req.params.email}})
      .spread(function (student, created) {
        res.send(created ? HttpStatus.CREATED : HttpStatus.CONFLICT);
      })
      .fail(function (err) {
        next(err);
      });
  });
};
