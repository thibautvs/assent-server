'use strict';

module.exports = (sequelize, DataTypes) => {
  let StudentProfileLanguage = sequelize.define('StudentProfileLanguage', {
    studentProfileId: {
      type: DataTypes.INTEGER,
      field: 'student_profile_id',
      primaryKey: true
    },
    languageId: {
      type: DataTypes.INTEGER,
      field: 'language_id',
      primaryKey: true
    },
    isMotherTongue: {
      type: DataTypes.BOOLEAN,
      field: 'is_mother_tongue'
    },
    listeningLevel: {
      type: DataTypes.INTEGER,
      field: 'listening_level'
    },
    speakingLevel: {
      type: DataTypes.INTEGER,
      field: 'speaking_level'
    },
    readingLevel: {
      type: DataTypes.INTEGER,
      field: 'reading_level'
    },
    writingLevel: {
      type: DataTypes.INTEGER,
      field: 'writing_level'
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
