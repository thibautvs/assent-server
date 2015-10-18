'use strict';

module.exports = (sequelize, DataTypes) => {
  let Hobby = sequelize.define('Hobby', {
    name: {
      type: DataTypes.TEXT,
      field: 'name'
    }
  }, {
    tableName: 'hobby',
    classMethods: {
      associate: models => {
        Hobby.hasOne(models.StudentProfileHobby);
      }
    }
  });

  return Hobby;
};
