const snakeize = require('snakeize');

const formatColumns = (object) => Object.keys(snakeize(object)).join(',');
const formatPlaceHolders = (object) => Object.keys(object).map((_key) => '?').join(',');

module.exports = {
    formatColumns,
    formatPlaceHolders,
};