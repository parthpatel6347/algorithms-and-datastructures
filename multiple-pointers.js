//write a function called sumZero which accepts a sorted array of integers. The function should find the
//first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined
//if a pair does not exist

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

//implement a function called countUniqueValue, which accepts a sorted array. and counts the unique values
//in the array. There can be negative numbers in the array, but it will always be sorted.

function countUniqueValue(arr) {
  if (!arr.length) return 0;
  let i = 0;
  for (let y = 1; y < arr.length; y++) {
    if (arr[i] !== arr[y]) {
      i++;
      arr[i] = arr[y];
    }
  }

  return i + 1;
}

console.log(countUniqueValue([1, 1, 1, 2]));
console.log(countUniqueValue([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValue([]));
console.log(countUniqueValue([-2, -1, -1, 0, 1]));

///Write a function called averagePair. Given a sorted array of integers and a target average, determine if there
// is a pair of values in the array where the average of the pair equals the target average. There may be more
// than one pair that matches the average target

function averagePair(arr, avg) {
  if (!arr.length) return false;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if ((arr[left] + arr[right]) / 2 === avg) {
      return true;
    } else if ((arr[left] + arr[right]) / 2 < avg) {
      left++;
    } else right--;
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));
