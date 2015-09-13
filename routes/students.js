'use strict';

module.exports = (app, models, HttpStatus) => {
  const Student = models.Student;

  app.get('/students', (req, res, next) => {
    Student
      .all()
      .then(data => res.send({students: data}))
      .catch(err => next(err));
  });

  app.post('/students', (req, res, next) => {
    Student
      .findOne({where: {email: req.body.email}})
      .then(data => {
        if (data === null) {
          Student
            .create({email: req.body.email})
            .then(data => res.status(HttpStatus.CREATED).send({id: data.id}))
            .catch(err => next(err));
        } else {
          res.sendStatus(HttpStatus.CONFLICT);
        }
      })
      .catch(err => next(err));
  });
};
