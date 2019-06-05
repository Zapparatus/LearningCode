function countWords(inputWords) {
  return inputWords.reduce(function (prev, curr) {
    if (!(curr in prev)) {
      prev[curr] = 0;
    }
    prev[curr] += 1;
    return prev;
  }, {});
}

module.exports = countWords;