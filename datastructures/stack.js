class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    let firstNode = this.first;
    this.first = firstNode.next;
    this.size--;
    if (this.length === 0) {
      this.last = null;
    }
    return firstNode.val;
  }
}

let list = new Stack();
console.log(list.push("first"));
console.log(list.push("second"));
console.log(list.push("third"));
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
