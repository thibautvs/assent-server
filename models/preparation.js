'use strict';

module.exports = (sequelize, DataTypes) => {
  let Preparation = sequelize.define('Preparation', {
    topic: {
      type: DataTypes.TEXT,
      field: 'topic'
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
    tableName: 'preparation',
    classMethods: {
      associate: models => {
        Preparation.belongsTo(models.StudentProfile);
      }
    }
  });

  return Preparation;
};
