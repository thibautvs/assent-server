'use strict';

module.exports = (sequelize, DataTypes) => {
  let StudentProfileHobby = sequelize.define('StudentProfileHobby', {
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
