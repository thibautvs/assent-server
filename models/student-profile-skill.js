'use strict';

module.exports = (sequelize, DataTypes) => {
  let StudentProfileSkill = sequelize.define('StudentProfileSkill', {
    position: {
      type: DataTypes.INTEGER,
      field: 'position'
    }
  }, {
    tableName: 'student_profile_skill',
    classMethods: {
      associate: models => {
        StudentProfileSkill.belongsTo(models.StudentProfile);
        StudentProfileSkill.belongsTo(models.Skill);
      }
    }
  });

  return StudentProfileSkill;
};
