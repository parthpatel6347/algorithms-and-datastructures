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

//longest common prefix

function longestCommonPrefix(arr) {
  if (arr.length === 0 || arr.length === null) return "";
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === arr[j].length || arr[j][i] !== arr[0][i]) {
        return arr[0].slice(0, i);
      }
    }
  }
  return arr[0];
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["flower", "flower", "flower"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["a", "b"]));

//leetcode 20. Valid Parenthesis

function isValidParenthesis(str) {
  let parens = {};
}

console.log(isValidParenthesis("()"));
console.log(isValidParenthesis("()[]{}"));
console.log(isValidParenthesis("(]"));
console.log(isValidParenthesis("([)]"));
console.log(isValidParenthesis("{[]}"));
