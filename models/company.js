'use strict';

module.exports = (sequelize, DataTypes) => {
  let Company = sequelize.define('Company', {
    name: {
      type: DataTypes.TEXT,
      field: 'name'
    }
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
