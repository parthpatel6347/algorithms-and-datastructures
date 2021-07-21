function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0; j--) {
      if (currentVal < arr[j]) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([6, 1, 3, 8, 4, 9, 5, 2, 7]));
console.log(insertionSort([1, 2, 3, 4, 5, 7, 6]));
