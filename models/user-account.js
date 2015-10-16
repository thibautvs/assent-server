'use strict';

module.exports = (sequelize, DataTypes) => {
  let UserAccount = sequelize.define('UserAccount', {
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

  return UserAccount;
};
