class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error('next node must be an instance of Node class');
    }
  }

  getNextNode() {
    return this.next;
  }

  setPreviousNode(node) {
    if (node instanceof Node || node === null) {
      this.previous = node;
    } else {
      throw new Error(
        'previous node must be an instance of Node class'
      );
    }
  }

  getPreviousNode() {
    return this.previous;
  }
}

module.exports = Node;
