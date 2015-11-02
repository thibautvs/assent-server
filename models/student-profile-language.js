'use strict';

module.exports = (sequelize, DataTypes) => {
  let StudentProfileLanguage = sequelize.define('StudentProfileLanguage', {
    isMotherTongue: {
      type: DataTypes.BOOLEAN,
      field: 'is_mother_tongue'
    },
    level: {
      type: DataTypes.DECIMAL(2, 1),
      field: 'level'
    },
    position: {
      type: DataTypes.INTEGER,
      field: 'position'
    }
  }, {
    tableName: 'student_profile_language',
    classMethods: {
      associate: models => {
        StudentProfileLanguage.belongsTo(models.StudentProfile);
        StudentProfileLanguage.belongsTo(models.Language);
      }
    }
  });

  return StudentProfileLanguage;
};
