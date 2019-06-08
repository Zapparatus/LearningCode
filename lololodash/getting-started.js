var _ = require("lodash");

var worker = function (collection) {
  return _.filter(collection, {active: true});
};

module.exports = worker;