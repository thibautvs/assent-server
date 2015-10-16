'use strict';

module.exports = (sequelize, DataTypes) => {
  let Degree = sequelize.define('Degree', {
    name: {
      type: DataTypes.TEXT,
      field: 'name'
    }
  }, {
    tableName: 'degree'
  });

  return Degree;
};
