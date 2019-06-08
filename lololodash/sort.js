var _ = require("lodash");

var worker = function (collection) {
  return _.sortBy(collection, function (value) {
    return -value.quantity;
  });
};

module.exports = worker;