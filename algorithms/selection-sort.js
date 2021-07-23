//swap function
function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function selectionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    let smallest = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    if (smallest !== i) {
      swap(arr, smallest, i);
    }
  }
  return arr;
}

console.log(selectionSort([6, 1, 3, 8, 4, 9, 5, 2, 7]));
console.log(selectionSort([1, 2, 3, 4, 5, 7, 6]));
