//how many times a smaller string occurs in a bigger string

function stringSearch(bigger, smaller) {
  let count = 0;

  for (let i = 0; i < bigger.length; i++) {
    for (let j = 0; j < smaller.length; j++) {
      if (smaller[j] !== bigger[i + j]) break;
      if (j === smaller.length - 1) count++;
    }
  }
  return count;
}

console.log(stringSearch("harry had a haha laugh", "ha"));
