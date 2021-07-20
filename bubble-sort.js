//swap function
function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      // console.log(arr, arr[j],arr[j+1])
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break; //if no swaps were made, means already sorted.
  }
  return arr;
}

console.log(bubbleSort([1, 6, 3, 8, 4, 9, 5, 2, 7]));
console.log(bubbleSort([1, 2, 3, 4, 5, 7, 6]));
