class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  //Dijkstra's Algorithm
  shortestPath(vertex1, vertex2) {
    const distances = {};
    const priorityQueue = new PriorityQueue();
    const previous = {};

    for (let key in this.adjacencyList) {
      if (key === vertex1) {
        distances[key] = 0;
        priorityQueue.enqueue(key, 0);
      } else {
        distances[key] = Infinity;
        priorityQueue.enqueue(key, Infinity);
      }
      previous[key] = null;
    }
    // console.log(distances);
    // console.log(priorityQueue.values);
    // console.log(previous)
    let currentVertex;
    let result = [];
    while (priorityQueue.values.length) {
      currentVertex = priorityQueue.dequeue().val;
      if (currentVertex === vertex2) {
        while (previous[currentVertex]) {
          result.push(currentVertex);
          currentVertex = previous[currentVertex];
        }
        break;
      }
      if (currentVertex || distances[currentVertex] !== Infinity)
        for (let i = 0; i < this.adjacencyList[currentVertex].length; i++) {
          let nextNode = this.adjacencyList[currentVertex][i];
          let nextNodeVal = nextNode.node;
          let currentDistance = distances[currentVertex] + nextNode.weight;
          if (currentDistance < distances[nextNodeVal]) {
            distances[nextNodeVal] = currentDistance;
            previous[nextNodeVal] = currentVertex;
            priorityQueue.enqueue(nextNodeVal, currentDistance);
          }
        }
    }
    return result.concat(vertex1).reverse();
  }
}

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

const g = new WeightedGraph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("B", "E", 3);
g.addEdge("A", "C", 2);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("F", "E", 1);
g.addEdge("D", "F", 1);

// console.log(g.adjacencyList);
console.log(g.shortestPath("A", "e"));
