'use strict';

module.exports = function (app, models, HttpStatus) {
  let Company = models.Company;

  app.get('/companies', function (req, res, next) {
    Company
      .all()
      .then(function (data) { res.send({companies: data}); })
      .catch(function (err) { next(err); });
  });

  app.get('/companies/:id', function (req, res, next) {
    Company
      .find({where: {id: req.params.id }})
      .then(function (data) {
        res.send(data === null ? HttpStatus.NOT_FOUND : {company: data});
      })
      .catch(function (err) { next(err); });
  });
};
