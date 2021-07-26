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
}

let heap = new MaxBinaryHeap();

console.log(heap.insert(54));
console.log(heap.insert(48));
console.log(heap.insert(42));
console.log(heap.insert(4));
console.log(heap.insert(20));
console.log(heap.insert(44));
console.log(heap.insert(47));
console.log(heap.insert(95));
