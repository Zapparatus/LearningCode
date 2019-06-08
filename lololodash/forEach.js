var _ = require("lodash");

var worker = function (collection) {
  return _.forEach(collection, function (value) {
    if (value.population > 1) {
      value.size = 'big';
    }
    else if (value.population > 0.5) {
      value.size = 'med';
    }
    else {
      value.size = 'small';
    }
  });
};

module.exports = worker;