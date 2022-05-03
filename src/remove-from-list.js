const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList( l, k ) {
  let prevList = null;
  let currList = l;

  // remove nodes from start of list
  while (currList.value === k) {
    currList = currList.next;
    l = currList;
  }
  // remove nodes from body of list
  while (currList.next !== null) {
    prevList = currList;
    currList = currList.next;
    if (currList.value === k) {
      prevList.next = currList.next;
      currList = prevList;
    }
  }

  return l;
}

module.exports = {
  removeKFromList
};
