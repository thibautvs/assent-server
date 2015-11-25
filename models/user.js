'use strict';

module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
    studentProfileId: {
      type: DataTypes.INTEGER,
      field: 'student_profile_id'
    },
    email: {
      type: DataTypes.TEXT,
      field: 'email'
    },
    password: {
      type: DataTypes.TEXT,
      field: 'password'
    }
  }, {
    tableName: 'user_account'
  });

  return User;
};
