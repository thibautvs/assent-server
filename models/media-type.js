'use strict';

module.exports = (sequelize, DataTypes) => {
  let MediaType = sequelize.define('MediaType', {
    name: {
      type: DataTypes.TEXT,
      field: 'name'
    },
    extension: {
      type: DataTypes.STRING(4),
      field: 'extension'
    },
    icon: {
      type: DataTypes.BLOB,
      field: 'icon'
    },
    isYouTube: {
      type: DataTypes.BOOLEAN,
      field: 'is_youtube'
    }
  }, {
    tableName: 'media_type',
    classMethods: {
      associate: models => {
        MediaType.hasOne(models.Media);
      }
    }
  });

  return MediaType;
};
