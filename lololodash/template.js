var _ = require("lodash");

var worker = function (user) {
  return _.template("Hello <%= name %> (logins: <%= _.size(login) %>)")(user);
};

module.exports = worker;