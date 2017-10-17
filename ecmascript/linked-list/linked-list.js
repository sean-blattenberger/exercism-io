export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  count() {
    return this.length;
  }
  push(elem) {
    var node = new Node(elem);
    if (this.length === 0) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    node.prev = this.tail;
    this.tail = node;
    this.length++;
  }
  unshift(elem) {
    var node = new Node(elem);
    if (this.length === 0) {
      this.tail = node;
    } else {
      this.head.prev = node;
    }
    node.next = this.head;
    this.head = node;
    this.length++;
  }
  pop() {
    const elem = this.tail.elem;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    this.length--;
    return elem;
  }
  shift() {
    const elem = this.head.elem;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    this.length--;
    return elem;
  }
  delete(elem) {
    var currentElem;
    for (currentElem = this.head; currentElem; currentElem = currentElem.next) {
      if (currentElem.elem == elem) {
        if (currentElem.prev && currentElem.next) {
          currentElem.prev.next = currentElem.next;
          currentElem.next.prev = currentElem.prev;
        }
        else if (currentElem.prev) {
          currentElem.prev.next = null;
          this.tail = currentElem.prev;
        }
        else if (currentElem.next) {
          currentElem.next.prev = null;
          this.tail = currentElem.next;
        }
        else if (this.length == 1) {
          this.tail = null;
          this.head = null;
        }
        this.length--;
      }
    }
  }
}

class Node {
  constructor(elem) {
    this.elem = elem;
    this.next = null;
    this.prev = null;
  }
}