'use strict';

module.exports = (sequelize, DataTypes) => {
  let Experience = sequelize.define('Experience', {
    startDate: {
      type: DataTypes.DATE,
      field: 'start_date'
    },
    endDate: {
      type: DataTypes.DATE,
      field: 'end_date'
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
