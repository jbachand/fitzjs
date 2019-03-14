'use strict';
const moment = require('moment');

module.exports = (dateString, dateFormat = undefined) => {
    return moment(dateString, dateFormat).toISOString();
};