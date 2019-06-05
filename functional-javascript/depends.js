function getDependencies(tree, result) {
  result = result || [];

  var dependencies = (tree && tree.dependencies) || [];

  Object.keys(dependencies).forEach(function(depend) {
    let key = depend + '@' + tree.dependencies[depend].version;
    if (result.indexOf(key) === -1) result.push(key);
    getDependencies(tree.dependencies[depend], result);
  });

  return result.sort();
}

module.exports = getDependencies;