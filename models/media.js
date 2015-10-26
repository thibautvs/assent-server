'use strict';

module.exports = (sequelize, DataTypes) => {
  let Media = sequelize.define('Media', {
    title: {
      type: DataTypes.TEXT,
      field: 'title'
    },
    content: {
      type: DataTypes.BLOB,
      field: 'content'
    },
    url: {
      type: DataTypes.TEXT,
      field: 'url'
    },
    position: {
      type: DataTypes.INTEGER,
      field: 'position'
    }
  }, {
    tableName: 'media',
    classMethods: {
      associate: models => {
        Media.belongsTo(models.StudentProfile);
        Media.belongsTo(models.MediaType);
      }
    }
  });

  return Media;
};
