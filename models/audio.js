'use strict';

module.exports = (sequelize, DataTypes) => {
  let Audio = sequelize.define('Audio', {
    url: {
      type: DataTypes.TEXT,
      field: 'url'
    },
    position: {
      type: DataTypes.INTEGER,
      field: 'position'
    }
  }, {
    tableName: 'audio',
    classMethods: {
      associate: models => {
        Audio.belongsTo(models.StudentProfile);
      }
    }
  });

  return Audio;
};
