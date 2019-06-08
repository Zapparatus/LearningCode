var _ = require("lodash");

var worker = function (collection) {
  let data = {average: 0, underperform: [], overperform: []};
  data.average = _.reduce(collection, function (accum, value) {
    return accum + value.income;
  }, 0);
  data.average /= _.size(collection);
  data.underperform = _.chain(collection).filter(item=>item.income<=data.average).sortBy('income');
  data.overperform = _.chain(collection).filter(item=>item.income>data.average).sortBy('income');
  
  return data;
};

module.exports = worker;