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
    photo: {
      type: DataTypes.BLOB,
      field: 'photo'
    },
    aboutMe: {
      type: DataTypes.TEXT,
      field: 'about_me'
    }
  }, {
    tableName: 'student_profile',
    classMethods: {
      associate: models => {
        StudentProfile.belongsTo(models.Faculty);
        StudentProfile.belongsTo(models.University);
        StudentProfile.belongsTo(models.Degree);
      }
    }
  });

  return StudentProfile;
};
