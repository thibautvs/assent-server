'use strict';

module.exports = (sequelize, DataTypes) => {
  let Faculty = sequelize.define('Faculty', {
    name: {
      type: DataTypes.TEXT,
      field: 'name'
    }
  }, {
    tableName: 'faculty',
    classMethods: {
      associate: models => {
        Faculty.hasOne(models.Education);
      }
    }
  });

  return Faculty;
};
