'use strict';

module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
    email: DataTypes.TEXT,
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    password: DataTypes.TEXT
  }, {
    tableName: 'user_account',
    underscored: true
  });

  return User;
};
