const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queueHead = null;
    this.queueLength = 0;
  }

  getUnderlyingList() {
    return this.queueHead;
  }

  enqueue( value ) {
    let node = new ListNode(value);
    if (this.queueLength === 0) {
      this.queueHead = node;
    } else {
      let current = this.queueHead;
      while(current.next) {
        current = current.next;
      }
      current.next = new ListNode(value);
    }
    this.queueLength++;
    return this.queueHead;
  }

  dequeue() {
    let current = this.queueHead;
    this.queueHead = current.next;
    this.queueLength--;
    return current.value;
  }
}

module.exports = {
  Queue
};
