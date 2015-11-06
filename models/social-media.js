'use strict';

module.exports = (sequelize, DataTypes) => {
  let SocialMedia = sequelize.define('SocialMedia', {
    url: {
      type: DataTypes.TEXT,
      field: 'url'
    },
    position: {
      type: DataTypes.INTEGER,
      field: 'position'
    }
  }, {
    tableName: 'social_media',
    classMethods: {
      associate: models => {
        SocialMedia.belongsTo(models.StudentProfile);
      }
    }
  });

  return SocialMedia;
};
