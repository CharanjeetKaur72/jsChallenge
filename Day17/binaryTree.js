// Activity 4: Binary Tree

// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, right.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Task 8: Implement a BinarTree class with methods for inserting values and performing in-order traversal to display nodes.

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // insert node in the binary tree
  insertValue(value) {
    let tNode = new TreeNode(value);

    if (this.isEmpty()) {
      this.root = tNode;
    } else {
      this.#insertNode(this.root, tNode);
    }
  }

  // traveres in the binary tree to find exact position for new node for insertion
  #insertNode(root, tNode) {
    if (tNode.value < root.value) {
      // node value is less than current root value
      if (root.left === null) {
        root.left = tNode;
      } else {
        this.#insertNode(root.left, tNode);
      }
    } else {
      if (root.right === null) {
        root.right = tNode;
      } else {
        this.#insertNode(root.right, tNode);
      }
    }
  }

  // display binary tree values
  displayNodes() {
    console.log("** In-Order Traversal of Binary Tree **");
    this.#inOrderTraversal(this.root);
    console.log("**************************************\n");

    console.log("Binary Tree Strucutre");
    console.log("=====================");
    console.log("Node value:", this.root.value);
    console.log("left:", this.root.left);
    console.log("right:", this.root.right);
    console.log("=====================");
  }

  // perform in-order traversal to display nodes
  #inOrderTraversal(node) {
    if (node === null) {
      // check current root node value
      return;
    }

    // Left subtree traversal
    this.#inOrderTraversal(node.left);

    // print the current node value
    console.log(node.value);

    // Right subtree traversal
    this.#inOrderTraversal(node.right);
  }

  // check for empty Binary tree
  isEmpty() {
    return this.root === null ? true : false;
  }
}

// implementation
console.log("*** Activity 4: Binary Tree ***");

const bTree = new BinaryTree();

bTree.insertValue(60);
bTree.insertValue(56);
bTree.insertValue(70);
bTree.insertValue(44);
bTree.insertValue(58);
bTree.insertValue(30);
bTree.displayNodes(20);
