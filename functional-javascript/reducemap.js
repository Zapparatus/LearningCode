module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function (prev, cur) {
    prev.push(fn(cur));
    return prev;
  }, []);
}