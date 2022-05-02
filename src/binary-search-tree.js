const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

// class Node {
//   constructor( value ) {
//     this.data = value;
//     this.left = null;
//     this.right = null;
//   }
// }

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    // if (!this.rootNode) return null;
    // else return this.rootNode;
    return this.rootNode;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add( data ) {
    this.rootNode = addWithin(this.rootNode, data);

    function addWithin(node, data) {
      if (!node) return new Node(data);
      if (node.data === data) return node;

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has( data ) {
    return searchWithin(this.rootNode, data);

    function searchWithin(node, data) {
      if (!node) return false;
      if (node.data === data) return true;

      return data < node.data ?
      searchWithin(node.left, data) :
      searchWithin(node.right, data);
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find( data ) {
    // return findWithin(this.rootNode, data);
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove( data ) {
    this.rootNode = removenode(this.rootNode, data);

    function removenode(node, data) {
      if (!node) return null;
      
      if (data < node.data) {
        node.left = removenode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removenode(node.right, data);
        return node;
      } else {
        // if data === value -> remove this (leaf node, no left and right child)
        if (!node.left && !node.right) return null; // instead of node item
      }

      if (!node.left) {
        // if left child not exist select right child instead of this node item
        node = node.right;
        return node;
      }
      if (!node.right) {
        // if right child not exist select left child instead of this node item
        node = node.left;
        return node;
      }

      let minFromRight = node.right;
      while (minFromRight.left) {
        minFromRight = minFromRight.left;
      }
      node.data = minFromRight.data;
      node.right = removenode(node.right, minFromRight.data);
      return node;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    }
  }

  min() {
    if (!this.rootNode) return;

    let node = this.rootNode;
    while (node.left) node = node.left;
  
    return node.data;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    if (!this.rootNode) return;

    let node = this.rootNode;
    while (node.right) node = node.right;

    return node.data;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

let testBST = new BinarySearchTree();

module.exports = {
  BinarySearchTree
};