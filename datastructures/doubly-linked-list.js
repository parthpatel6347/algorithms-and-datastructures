class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let toRemove = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = toRemove.prev;
      this.tail.next = null;
      toRemove.prev = null;
    }

    this.length--;
    return toRemove;
  }

  shift() {
    if (!this.head) return undefined;
    let toRemove = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = toRemove.next;
      this.head.prev = null;
      toRemove.next = null;
    }

    this.length--;
    return toRemove;
  }

  unShift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let getNode;
    if (idx < this.length / 2) {
      getNode = this.head;
      for (let i = 0; i < idx; i++) {
        getNode = getNode.next;
      }
    } else {
      getNode = this.tail;
      for (let i = this.length - 1; i > idx; i--) {
        getNode = getNode.prev;
      }
    }
    return getNode;
  }

  set(val, idx) {
    let foundNode = this.get(idx);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(val, idx) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unShift(val);
    if (idx === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let prevNode = this.get(idx - 1);
    let nextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    newNode.prev = prevNode;

    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return false;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    let toRemove = this.get(idx);
    let prevNode = toRemove.prev;
    let nextNode = toRemove.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    toRemove.next = null;
    toRemove.prev = null;

    this.length--;
    return toRemove;
  }
}

//tests

let list = new DoublyLinkedList();

list.push("parth");
list.push("patel");
list.push(999);
list.push(888);
list.push(777);
list.push(666);
list.push("second last");
list.push("last");
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.shift());
// list.unShift(111);
// console.log(list.set(9999, 2));
list.insert("Iron Man", 2);
console.log(list.remove(2));

console.log(list.get(2));
// console.log(list);
