function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function pivotHelper(arr, startIdx = 0, endIdx = arr.length - 1) {
  let pivot = startIdx;

  for (i = startIdx + 1; i <= endIdx; i++) {
    if (arr[startIdx] > arr[i]) {
      pivot++;
      swap(arr, pivot, i);
    }
  }
  swap(arr, pivot, startIdx);
  return pivot;
}

console.log(pivotHelper([5, 2, 7, 9, 3, 10]));
console.log(pivotHelper([4, 8, 2, 1, 5, 7, 6, 3]));
console.log(pivotHelper([5, 7, 6, 8]));

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivot = pivotHelper(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
