'use strict';

module.exports = (sequelize, DataTypes) => {
  let Hobby = sequelize.define('Hobby', {
    name: {
      type: DataTypes.TEXT,
      field: 'name'
    }
  }, {
    tableName: 'hobby'
  });

  return Hobby;
};
