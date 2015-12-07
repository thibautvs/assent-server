/* IMPORTANT
 *   - every change in this file must also be implemented client-side
 *   - if a validation rule changes, then related messages have to be adapted
 */

'use strict';
const _ = require('lodash');

exports.required = value => {
  return value !== undefined && value.trim().length > 0;
};

exports.email = value => {
  return value !== undefined && /^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$/.test(value);
};

exports.password = value => {
  return value !== undefined && value.length >= 6;
};

exports.video = value => {
  return value !== undefined &&
    (_.startsWith(value.toLowerCase(), 'https://www.youtube.com/embed/')
    || _.startsWith(value.toLowerCase(), 'https://player.vimeo.com/video/'));
};

exports.isValid = validations => {
  return validations.every(v => v === true);
};
