class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  append(value) {
    let node = new Node(value);
    if (this.size === 0) {
      this.tail = node;
      this.head = node;
    } else {
      this.tail.nextNode = node;
      this.tail = node;
    }
    this.size++;
  }
  prepend(value) {
    let node = new Node(value, this.head);
    this.head = node;
    this.size++;
  }
  at(index) {
    let indexNode = this.head;
    if (index <= this.size && index !== 0) {
      if (index === 1) {
        return indexNode;
      } else {
        for (let i = 1; i < this.size; i++) {
          indexNode = indexNode.nextNode;
        }
        return indexNode;
      }
    }
  }

  // pop() {
  //   this.at(this.size).
  // }
}
