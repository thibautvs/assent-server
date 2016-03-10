'use strict';

module.exports = (sequelize, DataTypes) => {
  let Experience = sequelize.define('Experience', {
    startMonth: {
      type: DataTypes.INTEGER,
      field: 'start_month'
    },
    startYear: {
      type: DataTypes.INTEGER,
      field: 'start_year'
    },
    endMonth: {
      type: DataTypes.INTEGER,
      field: 'end_month'
    },
    endYear: {
      type: DataTypes.INTEGER,
      field: 'end_year'
    },
    description: {
      type: DataTypes.TEXT,
      field: 'description'
    }
  }, {
    tableName: 'experience',
    classMethods: {
      associate: models => {
        Experience.belongsTo(models.StudentProfile);
        Experience.belongsTo(models.ExperienceType);
        Experience.belongsTo(models.Company);
      }
    }
  });

  return Experience;
};
