//Min Binary Heap w/ node

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    let index = this.values.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.values[index].priority >= this.values[parentIndex].priority)
        break;
      swap(this.values, index, parentIndex);
      index = parentIndex;
    }
    return this.values;
  }

  dequeue() {
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
        if (leftChild.priority < this.values[parentIndex].priority) {
          greaterChildIdx = leftChildIdx;
        }
      }
      if (rightChildIdx < this.values.length) {
        rightChild = this.values[rightChildIdx];
        if (
          rightChild.priority < leftChild.priority &&
          rightChild.priority < this.values[parentIndex].priority
        ) {
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

let pq = new PriorityQueue();

pq.enqueue("parth", 4);
pq.enqueue("aneri", 2);
pq.enqueue("patel", 1);
pq.enqueue("harry", 8);
pq.enqueue("ron", 3);

console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.values);
