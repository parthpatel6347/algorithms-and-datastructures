const { element } = require("prop-types");

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      this.removeEdge(vertex, this.adjacencyList[vertex][0]);
    }
    delete this.adjacencyList[vertex];
  }

  //recursive depth first traverse/search
  rDFS(startVertex) {
    let result = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;

    const traverse = (vertex) => {
      if (!vertex) return null;
      result.push(vertex);
      visited[vertex] = true;
      adjacencyList[vertex].forEach((element) => {
        if (!visited[element]) {
          return traverse(element);
        }
      });
    };
    traverse(startVertex);
    return result;
  }

  //iterative depth first traverse/search
  iDFS(startVertex) {
    let S = [startVertex]; //stack
    let result = [];
    let visited = {};
    visited[startVertex] = true;
    let currentVertex;
    while (S.length) {
      currentVertex = S.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((element) => {
        if (!visited[element]) {
          visited[element] = true;
          S.push(element);
        }
      });
    }
    return result;
  }

  //Breadth first traverse/search
  BFS(startVertex) {
    let Q = [startVertex]; //queue
    let result = [];
    let visited = {};
    visited[startVertex] = true;
    let currentVertex;
    while (Q.length) {
      currentVertex = Q.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((element) => {
        if (!visited[element]) {
          visited[element] = true;
          Q.push(element);
        }
      });
    }
    return result;
  }
}

let g = new Graph();

g.addVertex("USA");
g.addVertex("India");
g.addVertex("Russia");
g.addVertex("Germany");
g.addVertex("Australia");
g.addEdge("USA", "India");
g.addEdge("USA", "Russia");
g.addEdge("USA", "Australia");
g.addEdge("India", "Germany");
g.addEdge("Russia", "Germany");
g.addEdge("Russia", "Australia");
g.addEdge("Russia", "India");
g.addEdge("Australia", "Germany");
// g.removeEdge("USA", "India");
// g.removeVertex("India");
// g.removeVertex("Russia")
// g.removeVertex("Germany")
// console.log(g.adjacencyList);
// console.log(g.rDFS("USA"));

let g2 = new Graph();
g2.addVertex("A");
g2.addVertex("B");
g2.addVertex("C");
g2.addVertex("D");
g2.addVertex("E");
g2.addVertex("F");

g2.addEdge("A", "B");
g2.addEdge("A", "C");
g2.addEdge("B", "D");
g2.addEdge("C", "E");
g2.addEdge("D", "E");
g2.addEdge("D", "F");
g2.addEdge("E", "F");

console.log(g2.rDFS("A"));
console.log(g2.iDFS("A"));
console.log(g2.BFS("A"));
