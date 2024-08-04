// Activity 2: Stack

// Task 3:Implement a Stack class with methods push (add element), pop (remove element) and peek (view the top element)
class NodeStack {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  // add a new element on the stack
  push(data) {
    let node = new NodeStack(data);
    node.next = this.top;
    this.top = node;
  }

  // remove an element (top element) from the stack
  pop() {
    if (this.isEmpty()) {
      console.log("Cannot pop an element from an empty stack!");
      return;
    }

    const poppedNodeData = this.top.data;
    this.top = this.top.next;
    return poppedNodeData;
  }

  // view the top element of stack
  peek() {
    if (this.isEmpty()) {
      console.log("Cannot peek top element, the stack is empty!");
      return;
    }
    console.log(`The top element data of stack : ${this.top.data}`);
  }

  // check for empty stack
  isEmpty() {
    return this.top === null ? true : false;
  }
}

console.log("*** Activity 2: Stack ***");
const myStack = new Stack();

console.log("calling peek(): ");
myStack.peek();

console.log("calling pop() :");
myStack.pop();

console.log("calling push() :");
myStack.push("first value");

console.log("calling push() :");
myStack.push("second value");

console.log("calling peek(): ");
myStack.peek();

console.log("calling push() :");
myStack.push("third value");

console.log("calling push() :");
myStack.push("fourth value");

console.log("calling peek(): ");
myStack.peek();

console.log("calling pop() ");
console.log(myStack.pop());

console.log("calling peek(): ");
myStack.peek();

// Task 4:Use the Stack class to reverse a string by pushing all characters on to the stack and then popping them off.

const myStrStack = new Stack();

const myStr = "Chai aur Code is awesome!";
for (let val in myStr) {
  myStrStack.push(myStr[val]);
}

let reverseStr = "";
while (!myStrStack.isEmpty()) {
  reverseStr += myStrStack.pop();
}

console.log("************");
console.log("The string to be reversed:", myStr);
console.log("The reversed string:", reverseStr);
console.log("************");
