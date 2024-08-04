// Activity 3: Queue

// Task 5:Implement a Queue class with methods enqueue( add element), dequeue (remove element) and front (view the first element)
class NodeQ {
  constructor(qdata) {
    this.qdata = qdata;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.qFront = null;
    this.qRear = null;
  }

  // chaeck for empty queue
  isEmpty() {
    return this.qFront === null ? true : false;
  }

  // add an element to queue at rear end
  enqueue(qdata) {
    const node = new NodeQ(qdata);

    if (this.isEmpty()) {
      this.qFront = node;
      this.qRear = node;
    } else {
      this.qRear.next = node;
      this.qRear = node;
    }
  }

  // remove an element from queue ( from front end)
  dequeue() {
    if (this.isEmpty()) {
      console.log("Cannot dequeue element as queue is empty!");
      return;
    }

    this.qFront = this.qFront.next;
  }

  front() {
    if (this.isEmpty()) {
      console.log("Cannot view front element of queue, the queue is empty!");
      return;
    }

    console.log("*** Queue data of front element ***");
    console.log(this.qFront.qdata);
    console.log("*************************");
  }

  displayQueue() {
    console.log("*** Queue  ***");

    let tempNode = this.qFront;
    while (tempNode !== null) {
      console.log(`${tempNode.qdata}`);
      tempNode = tempNode.next;
    }
    console.log("**************");
  }
}

console.log(" Activity 3: Queue");

const myQueue = new Queue();

myQueue.front();
myQueue.dequeue();
myQueue.enqueue("Anil");
myQueue.enqueue("Sunil");
myQueue.enqueue("Reena");
myQueue.front();

myQueue.dequeue();
myQueue.front();

myQueue.enqueue("Jyoti");
myQueue.enqueue("Jitesh");
myQueue.front();

myQueue.displayQueue();

// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order

console.log("** Print Jobs in the queue **");

// function to simulate printer queue
function printDocs(arr) {
  try {
    const printQueue = new Queue();

    // add documents to queue
    arr.forEach((printjob) => {
      printQueue.enqueue(printjob);
    });

    printQueue.displayQueue();

    // process the documents
    while (!printQueue.isEmpty()) {
      printQueue.front();
      printQueue.dequeue();
    }
  } catch (e) {
    console.log("Error:", e);
  }
}

let docs = ["Job 1", "Job 2", "Job 3", "Job 4", "Job 5"];
printDocs(docs);
