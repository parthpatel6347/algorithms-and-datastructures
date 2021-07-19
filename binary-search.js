function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((right + left) / 2);

  while (arr[middle] !== val && left <= right) {
    if (val > arr[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
    middle = Math.floor((right + left) / 2);
  }
  if (arr[middle] === val) {
    return middle;
  }
  return -1;
}

console.log(
  binarySearch([1, 2, 3, 6, 8, 9, 12, 14, 17, 23, 25, 52, 67, 98, 100], 2)
);
