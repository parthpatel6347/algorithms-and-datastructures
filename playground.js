function romanToInt(s) {
  const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let count = 0;

  let i = 0;
  while (i < s.length) {
    if (values[s[i]] < values[s[i + 1]]) {
      count += values[s[i + 1]] - values[s[i]];
      i++;
    } else {
      count += values[s[i]];
    }
    i++;
  }

  return count;
}

console.log(romanToInt("MCMXCIV"));
