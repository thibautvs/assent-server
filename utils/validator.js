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
    (contains(value, 'facebook.com/')
    || contains(value, 'twitter.com/')
    || contains(value, 'linkedin.com/in/')
    || contains(value, 'plus.google.com/')
    || contains(value, 'github.com/')
    || contains(value, 'instagram.com/'));
};

exports.isValid = validations => {
  return validations.every(v => v === true);
};

function startsWith(value, start) {
  return _.startsWith(value.trim().toLowerCase(), start);
}

function contains(value, substring) {
  return value.toLowerCase().indexOf(substring.toLowerCase()) !== -1;
}
