'use strict';

exports.nullOrEmpty = str => {
  return str === undefined
    || str === null
    || str.trim().length === 0;
};

exports.lowercaseFirstLetter = str => {
  return str.charAt(0).toLowerCase() + str.slice(1);
};

exports.pluralize = str => {
  let lastLetter = str.charAt(str.length - 1);
  if (lastLetter === 'y')
    return str.substring(0, str.length - 1) + 'ies';
  return str + 's';
}
