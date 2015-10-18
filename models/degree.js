'use strict';

module.exports = (sequelize, DataTypes) => {
  let Degree = sequelize.define('Degree', {
    name: {
      type: DataTypes.TEXT,
      field: 'name'
    }
  }, {
    tableName: 'degree',
    classMethods: {
      associate: models => {
        Degree.hasOne(models.Education);
        Degree.hasOne(models.Grade);
      }
    }
  });

  return Degree;
};
