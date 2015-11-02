'use strict';

module.exports = (sequelize, DataTypes) => {
  let Country = sequelize.define('Country', {
    name: {
      type: DataTypes.TEXT,
      field: 'name'
    }
  }, {
    tableName: 'country',
    classMethods: {
      associate: models => {
        Country.hasOne(models.StudentProfile);
      }
    }
  });

  return Country;
};
