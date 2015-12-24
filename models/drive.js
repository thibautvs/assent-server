'use strict';

module.exports = (sequelize, DataTypes) => {
  let Drive = sequelize.define('Drive', {
    factor: {
      type: DataTypes.TEXT,
      field: 'factor'
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
    tableName: 'drive',
    classMethods: {
      associate: models => {
        Drive.belongsTo(models.StudentProfile);
      }
    }
  });

  return Drive;
};
