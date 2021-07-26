// There can be only one root.
// Every parent node can have at most 2 children.
// Every child node to the left of a parent node is always less than the parent.
// Every child node to the right of a parent node is always greater than the parent.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let curNode = this.root;
    while (true) {
      if (value === curNode.value) return undefined;
      if (value < curNode.value) {
        if (curNode.left === null) {
          curNode.left = newNode;
          return this;
        }
        curNode = curNode.left;
      } else {
        if (curNode.right === null) {
          curNode.right = newNode;
          return this;
        }
        curNode = curNode.right;
      }
    }
  }

  find(value) {
    if (this.root === null) return false;

    let curNode = this.root;
    let found = false;
    while (curNode && !found) {
      if (value < curNode.value) {
        curNode = curNode.left;
      } else if (value > curNode.value) {
        curNode = curNode.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return curNode;
  }

  //Breadth First Search
  BFS() {
    let queue = [this.root];
    let data = [];
    let node;
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  //Depth First Search
  DFSPreOrder() {
    let data = [];

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }
}

let bst = new BinarySearchTree();

bst.insert(5);
bst.insert(4);
bst.insert(1);
bst.insert(2);
bst.insert(10);
bst.insert(9);
bst.insert(3);
bst.find(4);
// console.log(bst.BFS());
// console.log(bst.DFSPreOrder());
// console.log(bst.DFSPostOrder());
console.log(bst.DFSInOrder());
