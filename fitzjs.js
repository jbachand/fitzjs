'use strict';
var moment = require('moment');

/**
 * @param {import('moment').MomentInput} dateString
 * @param {import('moment').MomentFormatSpecification} dateFormat
 */
module.exports = function (dateString, dateFormat) {
  return moment(dateString, dateFormat).toISOString();
};


























































































































































































































































































































































































































