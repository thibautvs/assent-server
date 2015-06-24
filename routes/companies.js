'use strict';

module.exports = function (app, HttpStatus) {
  var companyList = [
    {id:1, name:'Coca-Cola'},
    {id:2, name:'Deloitte'}
  ];

  app.get('/companies', function (req, res, next) {
    res.json(companyList);
  });

  app.get('/companies/:id', function (req, res, next) {
    res.json(companyList[0]);
  });
};
