'use strict';

module.exports = (sequelize, DataTypes) => {
  let Faculty = sequelize.define('Faculty', {
    name: {
      type: DataTypes.TEXT,
      field: 'name'
    }
  }, {
    tableName: 'faculty'
  });

  return Faculty;
};
