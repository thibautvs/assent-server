/* IMPORTANT
 *   - every change in this file must also be implemented client-side
 *   - if a validation rule changes, then related messages have to be adapted
 */

'use strict';
const _ = require('lodash');

exports.required = value => {
  if (value !== undefined && value !== null) {
    if (typeof value === 'string') {
      return value.trim().length > 0;
    }
    return true;
  }
  return false;
};

exports.email = value => {
  return value && /^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$/.test(value);
};

exports.password = value => {
  return value && value.length >= 6;
};

exports.video = value => {
  if (value) {
    return startsWith(value, 'https://www.youtube.com/embed/')
      || startsWith(value, 'https://player.vimeo.com/video/');
  }
  return true;
};

exports.audio = value => {
  return value && startsWith(value, 'https://w.soundcloud.com/player/');
};

exports.socialMedium = value => {
  return value &&
    (contains(value, 'facebook.com/')
    || contains(value, 'twitter.com/')
    || contains(value, 'linkedin.com/in/')
    || contains(value, 'plus.google.com/')
    || contains(value, 'github.com/')
    || contains(value, 'instagram.com/')
    || contains(value, 'medium.com/')
    || contains(value, 'tumblr.com/')
    || contains(value, 'slideshare.net/'));
};

exports.startDateLowerThanEndDate = (startMonth, startYear, endMonth, endYear) => {
  if (startMonth && startYear && endMonth && endYear) {
    let startDate = new Date(startYear, startMonth - 1, 1);
    let endDate = new Date(endYear, endMonth - 1, 1);
    return startDate < endDate;
  }
  return true;
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
