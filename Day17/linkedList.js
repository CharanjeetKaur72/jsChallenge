// Activity 1: Linked List

// Task 1: implement a node class to represent an element in a linked list with properties value and next.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Task 2: Implement a linked list class with methods to add a node to the end, remove a node from the end and display all nodes.

class LinkedList {
  constructor() {
    // head node of linked list pointing at null initially
    this.head = null;
  }

  // add a node to the end of linked list
  addNode(nodeVal) {
    let node = new Node(nodeVal);

    if (this.head === null) {
      // if list is empty
      this.head = node;
    } else {
      // traverse the list till end then add new node
      let tempNode = this.head;

      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = node;
    }
  }

  // remove a node from the end of the linked list
  removeNode() {
    if (this.head === null) {
      console.log("Cannot remove node. The list is empty!");
      return;
    }

    if (this.head.next == null) {
      // when there is only one node in the list
      this.head = null;
    } else {
      // traverse till the end of list and remove the last node
      let tempNode = this.head;
      let previousNode = tempNode;
      while (tempNode.next !== null) {
        previousNode = tempNode;
        tempNode = tempNode.next;
      }
      previousNode.next = null;
    }
  }

  // display all nodes in the linked list
  display() {
    if (this.head === null) {
      console.log("Empty List!");
      return;
    }

    let tempNode = this.head;
    console.log("*** Nodes in the Linked List ***");
    while (tempNode !== null) {
      console.log(`${tempNode.value}`);
      tempNode = tempNode.next;
    }
    console.log("***************************");
  }
}

console.log("*** Activity 1: Linked List ***");

let myList = new LinkedList();
myList.addNode(3);
myList.addNode(true);
myList.addNode([22, 5, 3, 88]);
myList.addNode("node 4");

myList.display();
myList.removeNode();
myList.display();

myList.addNode(55);
myList.addNode("Node 6");

myList.display();
myList.removeNode();
myList.display();
