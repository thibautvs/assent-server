'use strict';

module.exports = (sequelize, DataTypes) => {
  let StudentProfileSkill = sequelize.define('StudentProfileSkill', {
    studentProfileId: {
      type: DataTypes.INTEGER,
      field: 'student_profile_id',
      primaryKey: true
    },
    skillId: {
      type: DataTypes.INTEGER,
      field: 'skill_id',
      primaryKey: true
    },
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
