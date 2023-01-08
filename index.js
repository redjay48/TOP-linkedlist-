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

  size() {
    return this.size;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    let indexNode = this.head;
    if (index <= this.size && index !== 0) {
      if (index === 1) {
        return indexNode;
      } else {
        for (let i = 1; i < index; i++) {
          indexNode = indexNode.nextNode;
        }
        return indexNode;
      }
    }
  }

  pop() {
    this.at(this.size - 1).nextNode = null;
    this.tail = this.at(this.size - 1);
    this.size--;
  }

  contains(value) {
    for (let i = 1; i <= this.size; i++) {
      if (this.at(i).value === value) {
        return true;
      }
    }
    return false;
  }

  find(value) {
    for (let i = 1; i <= this.size; i++) {
      if (this.at(i).value === value) {
        return i;
      }
    }
    return null;
  }

  toString() {
    let printList = `(${this.head.value}) -> `;
    for (let i = 2; i <= this.size; i++) {
      printList = printList + `(${this.at(i).value}) -> `;
    }
    printList = printList + `${this.at(this.size).nextNode}`;
    console.log(printList);
  }

  insertAt(value, index) {
    let node = new Node(value);
    if(index === 1) {
      this.prepend(value);
    } else if(index === this.size) {
      this.append(value);
    } else {
        node.nextNode = this.at(index);
        this.at(index - 1).nextNode = node;
    }
    this.size++;
  }

  removeAt(index) {
    if(index === this.size) {
      this.pop();
    } else if (index === 1) {
      this.head = this.at(index).nextNode;
      this.size--;
    } else {
      this.at(index - 1).nextNode = this.at(index + 1);
      this.at(index).nextNode = null;
      this.size--;
    }
  }

} 

let list = new LinkedList();
list.append("morning");
list.prepend("good");
