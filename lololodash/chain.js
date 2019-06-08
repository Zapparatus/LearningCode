var _ = require("lodash");

var worker = function (collection) {
  return _.chain(collection)
    .sort()
    .map(item=>item+"Chained")
    .map(item=>item.toUpperCase())
    .value();
};

module.exports = worker;