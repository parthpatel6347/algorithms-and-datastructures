class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let curNode = this.head;
    for (let i = 1; i < this.length - 1; i++) {
      curNode = curNode.next;
    }
    let lastNode = curNode.next;
    curNode.next = null;
    this.tail = curNode;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return lastNode;
  }

  shift() {
    if (!this.head) return undefined;
    let firstNode = this.head;
    this.head = firstNode.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return firstNode;
  }

  unShift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let curNode = this.head;
    let i = 0;
    while (i !== idx) {
      curNode = curNode.next;
      i++;
    }
    return curNode;
  }

  set(val, idx) {
    let foundNode = this.get(idx);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(val, idx) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unShift(val);

    let newNode = new Node(val);
    let foundNode = this.get(idx - 1);
    newNode.next = foundNode.next;
    foundNode.next = newNode;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();

    let foundNode = this.get(idx - 1);
    let toRemoveNode = foundNode.next;
    foundNode.next = toRemoveNode.next;
    this.length--;
    return toRemoveNode;
  }

  reverse() {
    let curNode = this.head;
    this.head = this.tail;
    this.tail = curNode;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = curNode.next;
      curNode.next = prev;
      prev = curNode;
      curNode = next;
    }

    return this;
  }
}

//tests

let list = new SinglyLinkedList();
list.push("parth");
list.push("patel");
list.push(999);
list.unShift("666");
console.log(list);
console.log(list.head);
console.log(list.head.next);

// list.pop();
// list.pop();
// list.shift();
// list.shift();
console.log(list.get(0));
console.log(list.set(111, 0));
console.log(list.insert("LOL", 1));
console.log(list.remove(1));
console.log(list.get(1));
console.log(list);
console.log(list.reverse());
console.log(list.get(0));
