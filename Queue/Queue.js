const LinkedList = require('../singly-linked-list/LinkedList');

class Queue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  isEmpty() {
    return this.size === 0;
  }

  enqueue(data) {
    if (this.hasRoom()) {
      const newData = this.queue.addToTail(data);
      this.size++;
      console.log(
        `Added ${data}! The queue size now is ${this.size}`
      );
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      const removedData = this.queue.removeHead();
      this.size--;
      console.log(
        `Removed ${removedData}! The queue size now is ${this.size}`
      );
      return removedData;
    }
  }
}

module.exports = Queue;
