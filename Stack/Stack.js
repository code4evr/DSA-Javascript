const LinkedList = require('../singly-linked-list/LinkedList');

class Stack {
  constructor(maxSize = Infinity) {
    this.stack = new LinkedList();
    this.size = 0;
    this.maxSize = maxSize;
  }
  hasRoom() {
    return this.size < this.maxSize;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    return this.stack.head.data;
  }

  push(value) {
    if (this.hasRoom()) {
      this.stack.addToHead(value);
      this.size++;
      console.log(`${value} added to the top of the stack`);
    }
  }

  pop() {
    if (!isEmpty) {
      const removedValue = this.stack.removeHead();
      this.size--;
      console.log(`${removedValue} popped from stack`);
      return removedValue;
    }
  }
}

module.exports = Stack;
