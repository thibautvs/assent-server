'use strict';

module.exports = function (app, HttpStatus) {
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
};
