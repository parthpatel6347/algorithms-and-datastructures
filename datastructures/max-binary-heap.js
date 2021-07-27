function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while (this.values[index] > this.values[parentIndex]) {
      swap(this.values, index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
    return this.values;
  }

  // colts solution
  //   insert(val) {
  //     this.values.push(val);
  //     let index = this.values.length - 1;
  //     while (index>0) {
  //     let parentIndex = Math.floor((index - 1) / 2);
  //     if(this.values[index] <= this.values[parentIndex]) break
  //       swap(this.values, index, parentIndex);
  //       index = parentIndex;
  //     }
  //     return this.values;
  //   }

  extractMax() {
    swap(this.values, 0, this.values.length - 1);
    let removed = this.values.pop();
    let parentIndex = 0;
    while (true) {
      let leftChildIdx = parentIndex * 2 + 1;
      let rightChildIdx = parentIndex * 2 + 2;
      let greaterChildIdx = null;
      let leftChild, rightChild;
      if (leftChildIdx < this.values.length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > this.values[parentIndex]) {
          greaterChildIdx = leftChildIdx;
        }
      }
      if (rightChildIdx < this.values.length) {
        rightChild = this.values[rightChildIdx];
        if (rightChild > leftChild && rightChild > this.values[parentIndex]) {
          greaterChildIdx = rightChildIdx;
        }
      }
      if (greaterChildIdx === null) break;
      swap(this.values, greaterChildIdx, parentIndex);
      parentIndex = greaterChildIdx;
    }
    return removed;
  }
}

let heap = new MaxBinaryHeap();

// heap.insert(54);
// heap.insert(48);
// heap.insert(42);
// heap.insert(4);
// heap.insert(20);
// heap.insert(44);
// heap.insert(47);
// console.log(heap.insert(95));
// console.log(heap.extractMax());
// console.log(heap.values)

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.values);
