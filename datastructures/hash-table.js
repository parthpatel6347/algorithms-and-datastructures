class HashTable {
  constructor(size = 52) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  //we use 'separate chaining' to handle collisions

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    let foundIndex = this.keyMap[index];
    if (foundIndex) {
      for (let i = 0; i < foundIndex.length; i++) {
        if (foundIndex[i][0] === key) {
          return foundIndex[i][1];
        }
      }
    }
    return undefined;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
}

let hashTable = new HashTable(4);

hashTable.set("parth", "1234");
hashTable.set("patel", "999");
hashTable.set("awesome", ":):):)");
hashTable.set("awe", "some");
hashTable.set("key", "value");
hashTable.set("sad", ":(((");
hashTable.set("socks", "shoes");
hashTable.set("sneakers", "shoes");
console.log(hashTable.keyMap);
console.log(hashTable.get("parth"));
console.log(hashTable.values());
console.log(hashTable.keys());
