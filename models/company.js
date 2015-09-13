'use strict';

module.exports = function (sequelize, DataTypes) {
  let Company = sequelize.define('Company', {
    name: DataTypes.TEXT
  }, {
    tableName: 'Companies'
  });

  return Company;
};
