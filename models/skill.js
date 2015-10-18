'use strict';

module.exports = (sequelize, DataTypes) => {
  let Skill = sequelize.define('Skill', {
    name: {
      type: DataTypes.TEXT,
      field: 'name'
    }
  }, {
    tableName: 'skill',
    classMethods: {
      associate: models => {
        Skill.hasOne(models.StudentProfileSkill);
      }
    }
  });

  return Skill;
};
