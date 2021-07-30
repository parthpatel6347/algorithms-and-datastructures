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
g.removeVertex("India");
// g.removeVertex("Russia")
// g.removeVertex("Germany")
console.log(g.adjacencyList);
