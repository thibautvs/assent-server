'use strict';

module.exports = function (sequelize, DataTypes) {
  var Company = sequelize.define('Company', {
    name: DataTypes.TEXT
  }, {
    tableName: 'Companies'
  });

  return Company;
};
