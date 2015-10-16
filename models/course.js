'use strict';

module.exports = (sequelize, DataTypes) => {
  let Course = sequelize.define('Course', {
    name: {
      type: DataTypes.TEXT,
      field: 'name'
    }
  }, {
    tableName: 'course'
  });

  return Course;
};
