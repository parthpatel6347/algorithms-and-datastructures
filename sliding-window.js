//fixed window size

//write a function called maxSubarraySum which accepts an array of integers and a number called n.
//The function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let maxSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  let tempSum = maxSum;

  for (let j = num; j < arr.length; j++) {
    tempSum = tempSum - arr[j - num] + arr[j];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySum([], 4));

//dynamic window size

//write a function which accepts two parameters, an array of positive integers and a positive integer
//This function should return the minimal length of a contiguous subarray of which the sum is
//greater than or equal to the integer passed to the function. If there isnt one, return 0 instead

function minSubArrayLen(arr, num) {
  let sum = 0;
  let windowStart = 0;
  let windowEnd = 0;
  let minWindowLen = Infinity;

  while (windowStart < arr.length) {
    if (sum < num && windowEnd < arr.length) {
      sum += arr[windowEnd];
      windowEnd++;
    } else if (sum >= num) {
      minWindowLen = Math.min(minWindowLen, windowEnd - windowStart);
      sum -= arr[windowStart];
      windowStart++;
    } else {
      break;
    }
  }
  return minWindowLen === Infinity ? 0 : minWindowLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
