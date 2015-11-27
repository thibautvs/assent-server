'use strict';

module.exports = (sequelize, DataTypes) => {
  let InviteCode = sequelize.define('InviteCode', {
    code: {
      type: DataTypes.TEXT,
      field: 'code'
    },
    inUse: {
      type: DataTypes.BOOLEAN,
      field: 'in_use'
    }
  }, {
    tableName: 'invite_code'
  });

  return InviteCode;
};
