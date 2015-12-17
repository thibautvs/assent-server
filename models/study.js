'use strict';

module.exports = (sequelize, DataTypes) => {
  let Study = sequelize.define('Study', {
    name: {
      type: DataTypes.TEXT,
      field: 'name'
    }
  }, {
    tableName: 'study',
    classMethods: {
      associate: models => {
        Study.hasOne(models.Education);
      }
    }
  });

  return Study;
};
