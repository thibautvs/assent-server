'use strict';

module.exports = (sequelize, DataTypes) => {
  let City = sequelize.define('City', {
    name: {
      type: DataTypes.TEXT,
      field: 'name'
    }
  }, {
    tableName: 'city',
    classMethods: {
      associate: models => {
        City.hasOne(models.StudentProfile);
      }
    }
  });

  return City;
};
