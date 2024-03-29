'use strict';

module.exports = (sequelize, DataTypes) => {
  let ExperienceType = sequelize.define('ExperienceType', {
    name: {
      type: DataTypes.TEXT,
      field: 'name'
    }
  }, {
    tableName: 'experience_type',
    classMethods: {
      associate: models => {
        ExperienceType.hasOne(models.Experience);
      }
    }
  });

  return ExperienceType;
};
