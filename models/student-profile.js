'use strict';

module.exports = (sequelize, DataTypes) => {
  let StudentProfile = sequelize.define('StudentProfile', {
    firstName: {
      type: DataTypes.TEXT,
      field: 'first_name'
    },
    lastName: {
      type: DataTypes.TEXT,
      field: 'last_name'
    },
    degreeYear: {
      type: DataTypes.INTEGER,
      field: 'degree_year'
    },
    expectedGraduationYear: {
      type: DataTypes.INTEGER,
      field: 'expected_graduation_year'
    },
    photo: {
      type: DataTypes.BLOB,
      field: 'photo'
    },
    videoUrl: {
      type: DataTypes.TEXT,
      field: 'video_url'
    },
    aspirations: {
      type: DataTypes.TEXT,
      field: 'aspirations'
    },
    preparation: {
      type: DataTypes.TEXT,
      field: 'preparation'
    }
  }, {
    tableName: 'student_profile',
    classMethods: {
      associate: models => {
        StudentProfile.belongsTo(models.Country);
        StudentProfile.belongsTo(models.City);
        StudentProfile.belongsTo(models.Study);
        StudentProfile.belongsTo(models.University);
        StudentProfile.belongsTo(models.Degree);
        StudentProfile.hasMany(models.StudentProfileSkill);
        StudentProfile.hasMany(models.StudentProfileLanguage);
        StudentProfile.hasMany(models.StudentProfileHobby);
        StudentProfile.hasMany(models.Experience);
        StudentProfile.hasMany(models.Education);
        StudentProfile.hasMany(models.Grade);
        StudentProfile.hasMany(models.SocialMedia);
        StudentProfile.hasMany(models.Audio);
        StudentProfile.hasMany(models.Drive);
        StudentProfile.hasMany(models.StrongestSkill);
      }
    }
  });

  return StudentProfile;
};
