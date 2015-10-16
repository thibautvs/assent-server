'use strict';

module.exports = (sequelize, DataTypes) => {
  let University = sequelize.define('University', {
    name: { type: DataTypes.TEXT, field: 'name' }
  }, {
    tableName: 'university'
  });

  return University;
};
