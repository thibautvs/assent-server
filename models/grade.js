'use strict';

module.exports = (sequelize, DataTypes) => {
  let Grade = sequelize.define('Grade', {
    degreeYear: {
      type: DataTypes.INTEGER,
      field: 'degree_year'
    },
    month: {
      type: DataTypes.INTEGER,
      field: 'month'
    },
    gradeActual: {
      type: DataTypes.DECIMAL(3, 1),
      field: 'grade_actual'
    },
    gradeMax: {
      type: DataTypes.INTEGER,
      field: 'grade_max'
    },
    position: {
      type: DataTypes.INTEGER,
      field: 'position'
    }
  }, {
    tableName: 'grade',
    classMethods: {
      associate: models => {
        Grade.belongsTo(models.StudentProfile);
        Grade.belongsTo(models.Course);
        Grade.belongsTo(models.Degree);
      }
    }
  });

  return Grade;
};
