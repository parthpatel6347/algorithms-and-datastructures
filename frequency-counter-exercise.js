// given two positive integers, find out if the two numbers have the same frequency of digits

function sameFrequency(num1, num2) {
  //convert number to an array of digits
  let arr1 = String(num1).split("");
  let arr2 = String(num2).split("");

  if (arr1.length !== arr2.length) {
    return false;
  }

  //get frequency of array elements
  let freqCounter1 = {};
  for (let num of arr1) {
    freqCounter1[num] = (freqCounter1[num] || 0) + 1;
  }

  let freqCounter2 = {};
  for (let num of arr2) {
    freqCounter2[num] = (freqCounter2[num] || 0) + 1;
  }

  //compare frequencies
  for (let num of arr1) {
    if (freqCounter1[num] !== freqCounter2[num]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(3589578, 5879385));

// implement a function called areThereDuplicates which accepts a variable number of arguments, and checks
//whether there are any duplicates among the arguments passed in.

function areThereDuplicates() {
  let freqCounter = {};
  for (let val in arguments) {
    freqCounter[arguments[val]] = (freqCounter[arguments[val]] || 0) + 1;
  }

  for (let key in freqCounter) {
    if (freqCounter[key] > 1) return true;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
