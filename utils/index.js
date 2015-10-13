'use strict';

module.exports.nullOrEmpty = str => {
  return str === undefined
    || str === null
    || str.trim().length === 0;
};
