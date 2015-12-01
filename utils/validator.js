/* IMPORTANT
 *   - every change in this file must also be implemented client-side
 *   - if a regex rule changes, then related messages have to be adapted
 */

'use strict';

exports.required = value => {
  return value !== undefined && value.trim().length > 0;
};

exports.email = value => {
  return value !== undefined && /^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$/.test(value);
};

exports.password = value => {
  return value !== undefined && value.length >= 6;
};

exports.isValid = validations => {
  return validations.every(v => v === true);
};
