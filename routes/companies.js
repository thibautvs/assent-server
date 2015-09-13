'use strict';

module.exports = (app, models, HttpStatus) => {
  let Company = models.Company;

  app.get('/companies', (req, res, next) => {
    Company
      .all()
      .then(data => res.send({companies: data}))
      .catch(err => next(err));
  });

  app.get('/companies/:id', (req, res, next) => {
    Company
      .find({where: {id: req.params.id }})
      .then(data => res.send(data === null ? HttpStatus.NOT_FOUND : {company: data}))
      .catch(err => next(err));
  });
};
