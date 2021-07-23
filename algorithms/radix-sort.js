//get digit

function getDigit(num, place) {
  return Math.floor((Math.abs(num) / Math.pow(10, place)) % 10);
}

console.log(getDigit(5257, 0));
console.log(getDigit(5257, 1));
console.log(getDigit(5257, 2));
console.log(getDigit(5257, 3));

//digit counter
function digitCount(num) {
  return Math.floor(Math.log10(Math.abs(num)) + 1);
}

console.log(digitCount(1));
console.log(digitCount(25));
console.log(digitCount(314));

function mostDigits(arr) {
  let maxDigits = 0;

  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}

console.log(mostDigits([1, 354, 2234, 123, 14, 650934]));

function radixSort(arr) {
  let maxDigits = mostDigits(arr);
  for (let k = 0; k < maxDigits; k++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      buckets[digit].push(arr[i]);
    }
    arr = [].concat(...buckets);
  }

  return arr;
}

console.log(radixSort([1, 354, 2234, 123, 14, 650]));
