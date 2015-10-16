'use strict';

module.exports = (sequelize, DataTypes) => {
  let Education = sequelize.define('Education', {
    isErasmus: {
      type: DataTypes.BOOLEAN,
      field: 'is_erasmus'
    },
    startDate: {
      type: DataTypes.DATE,
      field: 'start_date'
    },
    endDate: {
      type: DataTypes.DATE,
      field: 'end_date'
    }
  }, {
    tableName: 'education',
    classMethods: {
      associate: models => {
        Education.belongsTo(models.StudentProfile);
        Education.belongsTo(models.Degree);
        Education.belongsTo(models.Faculty);
        Education.belongsTo(models.University);
      }
    }
  });

  return Education;
};
