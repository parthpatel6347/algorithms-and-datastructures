function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function pivotHelper(arr, startIdx = 0, endIdx = arr.length - 1) {
  let pivot = startIdx;

  for (i = startIdx + 1; i <= endIdx; i++) {
    if (arr[startIdx] > arr[i]) {
      swap(arr, pivot + 1, i);
      pivot++;
    }
  }
  swap(arr, pivot, startIdx);
  console.log(arr);
  return pivot;
}

console.log(pivotHelper([5, 2, 7, 9, 3, 10]));
