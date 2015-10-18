'use strict';

module.exports = (sequelize, DataTypes) => {
  let Course = sequelize.define('Course', {
    name: {
      type: DataTypes.TEXT,
      field: 'name'
    }
  }, {
    tableName: 'course',
    classMethods: {
      associate: models => {
        Course.hasOne(models.Grade);
      }
    }
  });

  return Course;
};
