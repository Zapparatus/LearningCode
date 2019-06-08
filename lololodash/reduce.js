var _ = require("lodash");

var worker = function (collection) {
  return _.chain(collection).reduce(function (accum, value) {
    if (!(accum.hasOwnProperty(value.article))) {
      accum[value.article] = {article:value.article, total_orders:0};
    }

    accum[value.article].total_orders += value.quantity;

    return accum;
  }, {}).map(value=>value).sort(item=>item.total_orders);
};

module.exports = worker;