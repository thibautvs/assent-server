'use strict';

module.exports = (sequelize, DataTypes) => {
  let StudentProfileHobby = sequelize.define('StudentProfileHobby', {
    studentProfileId: {
      type: DataTypes.INTEGER,
      field: 'student_profile_id',
      primaryKey: true
    },
    hobbyId: {
      type: DataTypes.INTEGER,
      field: 'hobby_id',
      primaryKey: true
    },
    description: {
      type: DataTypes.TEXT,
      field: 'description'
    },
    position: {
      type: DataTypes.INTEGER,
      field: 'position'
    }
  }, {
    tableName: 'student_profile_hobby',
    classMethods: {
      associate: models => {
        StudentProfileHobby.belongsTo(models.StudentProfile);
        StudentProfileHobby.belongsTo(models.Hobby);
      }
    }
  });

  return StudentProfileHobby;
};
