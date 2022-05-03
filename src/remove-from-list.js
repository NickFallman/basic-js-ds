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
  // console.log(k, l);

  let prevList = null;
  let currList = l;

  // remove nodes from start of list
  while (currList.value === k) {
    currList = currList.next;
    l = currList;
    // console.log(l);
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

  // currList = l;
  // let i = 0;
  // while (currList !== null) {
  //   console.log(`list elm ${i++} value: `, currList.value, currList.next);
  //   currList = currList.next;
  // };

  return l;
  
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// function convertArrayToList(arr) {
//   return arr.reverse().reduce((acc, cur) => {
//     if (acc) {
//       const node = new ListNode(cur);
//       node.next = acc;
//       return node;
//     }

//     return new ListNode(cur);
//   }, null);
// }

// let initial = convertArrayToList([3, 3, 1, 2, 3, 3, 4, 5, 3]);
// let res = removeKFromList(initial, 3);
// console.log(res);

module.exports = {
  removeKFromList
};
