function reduce(arr, fn, initial) {
  if (!arr.length) return initial;
  let newInitial = fn(initial, arr[0]);
  let newArr = Array.prototype.slice.call(arr, 1);
  return reduce(newArr, fn, newInitial);
}

module.exports = reduce;
