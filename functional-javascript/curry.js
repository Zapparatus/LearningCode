function getPartialFunction(fn, ...args) {
  return function (...secondArgs) {
    return fn(...args.concat(secondArgs));
  };
}

function curry(fn, n=fn.length) {
  if (n > 0) {
    return function (arg) {
      return curry(getPartialFunction(fn, arg), n-1);
    };
  } else {
    return fn();
  }
}

module.exports = curry;