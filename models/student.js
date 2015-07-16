'use strict';

module.exports = function (sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    email: DataTypes.TEXT
  }, {
    tableName: 'Students'
  });

  return Student;
};
