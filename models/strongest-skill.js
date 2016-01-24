'use strict';

module.exports = (sequelize, DataTypes) => {
  let StrongestSkill = sequelize.define('StrongestSkill', {
    skill: {
      type: DataTypes.TEXT,
      field: 'skill'
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
    tableName: 'strongest_skill',
    classMethods: {
      associate: models => {
        StrongestSkill.belongsTo(models.StudentProfile);
      }
    }
  });

  return StrongestSkill;
};
