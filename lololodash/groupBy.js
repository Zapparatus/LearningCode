var _ = require("lodash");

var worker = function (collection) {
  return _.chain(collection).groupBy("username")
    .map(function (item, name) {
      return {username: name, comment_count: _.size(item)};
    })
    .sortBy(item=>-item.comment_count);
};

module.exports = worker;