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
    aboutMe: {
      type: DataTypes.TEXT,
      field: 'about_me'
    },
    aspirations: {
      type: DataTypes.TEXT,
      field: 'aspirations'
    },
    funnyFact: {
      type: DataTypes.TEXT,
      field: 'funny_fact'
    },
    projects: {
      type: DataTypes.TEXT,
      field: 'projects'
    }
  }, {
    tableName: 'student_profile',
    classMethods: {
      associate: models => {
        StudentProfile.belongsTo(models.Country);
        StudentProfile.belongsTo(models.City);
        StudentProfile.belongsTo(models.Faculty);
        StudentProfile.belongsTo(models.University);
        StudentProfile.belongsTo(models.Degree);
        StudentProfile.hasMany(models.StudentProfileSkill);
        StudentProfile.hasMany(models.StudentProfileLanguage);
        StudentProfile.hasMany(models.StudentProfileHobby);
        StudentProfile.hasMany(models.Experience);
        StudentProfile.hasMany(models.Education);
        StudentProfile.hasMany(models.Grade);
        StudentProfile.hasMany(models.SocialMedia);
      }
    }
  });

  return StudentProfile;
};
