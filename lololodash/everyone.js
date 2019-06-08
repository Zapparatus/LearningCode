var _ = require("lodash");

var worker = function (collection) {
  let data = {
    hot: [],
    warm: []
  };

  _.forEach(collection, function (value, index) {
    if (_.every(value, temp=>temp>19)) {
      data.hot.push(index);
    }
    else if (_.some(value, temp=>temp>19)) {
      data.warm.push(index);
    }
  });

  return data;
};

module.exports = worker;