const Node = require('../NodesDlist');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    if (currentHead) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }
    this.head = newHead;
    if (!this.tail) {
      this.tail = newHead;
    }
  }

  addToTail() {
    const newTail = new Node(data);
    const currentTail = this.tail;
    if (currentTail) {
      currentTail.setNextNode(newTail);
      newTail.setPreviousNode(currentTail);
    }
    this.tail = newTail;
    if (!this.head) {
      this.head = newTail;
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removeHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    if (this.head) {
      this.head.setPreviousNode(null);
    }
    if (removedHead === this.tail) {
      this.removeTail();
    }
    return removedHead.data;
  }

  removeTail() {
    const removedTail = this.tail;
    if (!removedTail) {
      return;
    }
    this.tail = removedTail.getPreviousNode();
    if (this.tail) {
      this.tail.setNextNode(null);
    }
    if (removedTail === this.head) {
      this.removedHead();
    }
    return removedTail.data;
  }

  removeByData(data) {
    let nodeToRemove;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        nodeToRemove = currentNode;
        break;
      }
      currentNode = currentNode.getNextNode();
    }
    if (!nodeToRemove) {
      return null;
    }

    if (nodeToRemove === this.head) {
      this.removeHead();
    } else if (nodeToRemove === this.tail) {
      this.removeTail();
    } else {
      const prevNode = nodeToRemove.getPreviousNode();
      const nextNode = nodeToRemove.getNextNode();
      prevNode.setNextNode(nextNode);
      nextNode.setPreviousNode(prevNode);
    }
  }

  printList() {
    let currentNode = this.head;
    let output = '<Head>';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<Tail>';
    console.log(output);
  }

  lengthOfList() {
    let len = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      currentNode = currentNode.getNextNode();
      len += 1;
    }
    return len;
  }

  middleOfList() {
    let len = 0;
    let midElement = null;
    let currentNode = this.head;
    console.log('the head is ', this.head.data);
    console.log('the currentest element is ', currentNode.data);
    if (this.lengthOfList() % 2 === 1) {
      let mid = Math.ceil(this.lengthOfList() / 2);
      while (currentNode !== null) {
        len += 1;
        if (len === mid) {
          midElement = currentNode;
          break;
        }
        currentNode = currentNode.getNextNode();
      }
    } else {
      let mid = this.lengthOfList() / 2 + 1;
      while (currentNode !== null) {
        len += 1;
        if (len === mid) {
          console.log('the length is ', mid);
          midElement = currentNode;
          break;
        }
        console.log('current element is ', currentNode.data);
        currentNode = currentNode.getNextNode();
      }
    }
    console.log('the mid element is ', midElement.data);
  }
}

module.exports = DoublyLinkedList;
