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
  if (value) {
    return startsWith(value, 'https://www.youtube.com/embed/')
      || startsWith(value, 'https://player.vimeo.com/video/');
  }
  return true;
};

exports.socialMedium = value => {
  return value !== undefined &&
    (startsWith(value, 'https://www.facebook.com/')
    || startsWith(value, 'https://twitter.com/')
    || startsWith(value, 'https://www.linkedin.com/in/')
    || startsWith(value, 'https://plus.google.com/')
    || startsWith(value, 'https://github.com/')
    || startsWith(value, 'https://www.instagram.com/'));
};

exports.isValid = validations => {
  return validations.every(v => v === true);
};

function startsWith(value, start) {
  return _.startsWith(value.trim().toLowerCase(), start);
}
