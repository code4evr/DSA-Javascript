const Nodes = require('../Nodes');

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Nodes(data);
    // console.log('the new head is ', newHead);
    const currentHead = this.head;
    // console.log('the current head is ', currentHead);
    this.head = newHead;
    // console.log('the assigned value of this.head is ', this.head);
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head;
    // console.log('initial tail value is ', tail);
    if (!tail) {
      // console.log('list is empty');
      this.head = new Nodes(data);
      // console.log('this.head value is ', this.head);
    } else {
      while (tail.getNextNode() !== null) {
        // console.log('trying to find the end of the tail');
        tail = tail.getNextNode();
        // console.log('the tail end is ', tail);
      }
      // console.log('setting the next node');
      tail.setNextNode(new Nodes(data));
      // console.log('next node is set', tail);
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }

  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }
}

module.exports = LinkedList;
