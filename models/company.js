'use strict';

module.exports = (sequelize, DataTypes) => {
  let Company = sequelize.define('Company', {
    name: DataTypes.TEXT
  }, {
    tableName: 'Companies'
  });

  return Company;
};
