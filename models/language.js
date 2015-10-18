'use strict';

module.exports = (sequelize, DataTypes) => {
  let Language = sequelize.define('Language', {
    name: {
      type: DataTypes.TEXT,
      field: 'name'
    },
    code: { type: DataTypes.STRING(2),
      field: 'code'
    }
  }, {
    tableName: 'language',
    classMethods: {
      associate: models => {
        Language.hasOne(models.StudentProfileLanguage);
      }
    }
  });

  return Language;
};
