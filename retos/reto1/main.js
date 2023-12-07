function findFirstRepeated(gifts) {
  const seenNumbers = new Set();

  for (const number of gifts) {
    if (seenNumbers.has(number)) {
      return number;
    } else {
      seenNumbers.add(number);
    }
  }

  return -1;
}

module.exports = findFirstRepeated;
