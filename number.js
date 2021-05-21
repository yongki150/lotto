export { makeRandomNumber, makeWinningNumber };

function makeRandomNumber(range) {
  const candidate = Array(range).fill().map((v, i) => i + 1);
  const shuffle = [];

  while (candidate.length > 0) {
    const random = Math.floor(Math.random() * candidate.length);
    const spliceArray = candidate.splice(random, 1);
    const value = spliceArray[0];
    shuffle.push(value);
  }
  return shuffle;
}

function makeWinningNumber(shuffle) {
  return shuffle.slice(0, 6).sort((a, b) => a - b);
}
