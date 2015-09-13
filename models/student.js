'use strict';

module.exports = (sequelize, DataTypes) => {
  let Student = sequelize.define('Student', {
    email: DataTypes.TEXT
  }, {
    tableName: 'Students'
  });

  return Student;
};
