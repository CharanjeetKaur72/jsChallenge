// Activity 5: Tree Traversal

console.log("*** Activity 5: Tree Traversal ***");
// Task 9: Write a recursive function to perform an in order traversal of a binary tree. Log the nodes as they are visited

// ************************************************
//  Binary Tree Node class
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// initally add some data to the binary tree
console.log("1. Binary Tree structure");
console.log("     1      ");
console.log(`   /   \\`);
console.log("  2     7");
console.log(` / \\   / \\`);
console.log("4   5  6  8");
console.log(`           \\`);
console.log("             10");

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(7);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(8);
root.right.right.right = new Node(10);

// create anothe binary tree with sample data
console.log("2. Binary Tree structure");
console.log("      10      ");
console.log(`     /  \\`);
console.log("    8     12");
console.log(`   / \\    / \\`);
console.log("  6   9  11  14");

// add data to binary tree strucutre
const broot = new Node(10);
broot.left = new Node(8);
broot.right = new Node(12);
broot.left.left = new Node(6);
broot.left.right = new Node(9);
broot.right.left = new Node(11);
broot.right.right = new Node(14);

//*************************************
// inorder traversal of binary tree
function inOrderRecursiveBinaryTree(node) {
  if (node === null) {
    return;
  }

  // Left subtree traversal
  inOrderRecursiveBinaryTree(node.left);

  // print the current node data
  console.log(node.data);

  // Right subtree traversal
  inOrderRecursiveBinaryTree(node.right);
}

// show binary tree data
console.log("Inorder traversal of first binary tree is: ");
inOrderRecursiveBinaryTree(root);

console.log("Inorder traversal of second binary tree is: ");
inOrderRecursiveBinaryTree(broot);

// Task 10:Write a recursive function to calculate the depth of a binary tree. Log the results for few test cases.

// Function to calculate the depth of a binary tree
function binaryTreeDepth(node) {
  if (node === null) {
    return 0;
  }

  // find depth of the left and right subtrees
  const leftDepth = binaryTreeDepth(node.left);
  const rightDepth = binaryTreeDepth(node.right);
  // add one to maximum depth of the left and right subtrees
  return Math.max(leftDepth, rightDepth) + 1;
}

// show depth of the binary tree using binary tree class :Node
console.log("Depth of the first binary tree:");
console.log(binaryTreeDepth(root));

console.log("Depth of the second binary tree:");
console.log(binaryTreeDepth(broot));
