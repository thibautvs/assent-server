'use strict';

module.exports = (sequelize, DataTypes) => {
  let Company = sequelize.define('Company', {
    name: DataTypes.TEXT
  }, {
    tableName: 'company',
    classMethods: {
      associate: models => {
        Company.hasOne(models.Experience);
      }
    }
  });

  return Company;
};
