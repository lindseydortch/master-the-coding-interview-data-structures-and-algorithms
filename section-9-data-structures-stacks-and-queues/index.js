// Stacks

// google
// udemy.com
// youtube

// Arrays or Linked Lists

// Queues

// Matt -- Joy -- Samir -- Pavel
// Arrays or Linked Lists

// Optional: How JavaScript Works
// Call stack

const one = () => {
  const two = () => {
    console.log("4");
  };
  two();
};

// console.log('4')
// two()
// one()
// CALL STACK - Example Above

// Exercise: Stack Implementation (Linked Lists)
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }

//   peek() {}

//   push(value) {
//     const newNode = new Node(value);

//     if (this.isEmpty()) {
//       this.top = newNode;
//       this.bottom = newNode;
//     }

//     this.top.next = newNode;
//     this.top =

//     this.length++;
//   }

//   pop() {
//     this.top.next = this.bottom.next;
//     console.log(this.top.next);
//   }

//   isEmpty() {
//     if (this.length === 0) {
//       return true;
//     }
//     return false;
//   }
// }

// const myStack = new Stack();
// console.log(myStack.isEmpty());
// myStack.push("Discord");
// myStack.push("Udemy");
// myStack.push("Google");
// console.log(myStack);
// myStack.peek();
// myStack.pop();

// // Solution: Stack Implementation (Linked Lists)
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }

//   peek() {
//     return this.top;
//   }

//   push(value) {
//     const newNode = new Node(value);

//     if (this.length === 0) {
//       this.top = newNode;
//       this.bottom = newNode;
//     } else {
//       const holdingPointer = this.top;
//       this.top = newNode;
//       this.top.next = holdingPointer;
//     }

//     this.length++;

//     return this;
//   }

//   pop() {
//     if (!this.top) {
//       return null;
//     }
//     if (this.top === this.bottom) {
//       this.bottom = null;
//     }

//     this.top = this.top.next;
//     this.length--;

//     return this;
//   }

//   //isEmpty
// }

// const myStack = new Stack();
// // console.log(myStack.isEmpty());
// myStack.push("Google");
// myStack.push("Udemy");
// myStack.push("Discord");
// console.log(myStack.peek());
// myStack.pop();
// myStack.pop();
// myStack.pop();
// console.log(myStack);

// Exercise: Stack Implementation (Arrays)
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.stack = [];
//   }

//   peek() {
//     if (this.stack !== 0) {
//       const length = this.stack.length;
//       return this.stack[length - 1];
//     }
//     return [];
//   }

//   push(value) {
//     this.stack.push(value);
//   }

//   pop() {
//     this.stack.pop();
//   }

//   //isEmpty
// }

// const myStack = new Stack();
// // console.log(myStack.isEmpty());
// myStack.push("Google");
// myStack.push("Udemy");
// myStack.push("Discord");
// console.log(myStack.peek());
// myStack.pop();
// // myStack.pop();
// // myStack.pop();
// console.log(myStack);

// Solution: Stack Implementation (Arrays)
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.array = [];
//   }

//   peek() {
//     return this.array[this.array.length - 1];
//   }

//   push(value) {
//     this.array.push(value);
//     return this;
//   }

//   pop() {
//     return this.array.pop();
//   }

//   //isEmpty
// }

// const myStack = new Stack();
// // console.log(myStack.isEmpty());
// myStack.push("Google");
// myStack.push("Udemy");
// myStack.push("Discord");
// console.log(myStack.peek());
// myStack.pop();
// myStack.pop();
// // myStack.pop();
// console.log(myStack);

// Exercise: Queue Implementation
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.length = 0;
//   }

//   peek() {
//     return this.first;
//   }

//   enqueue(value) {
//     const newNode = new Node(value);

//     if (this.length === 0) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       // Before {value: 'Joy', next: {value: Matt, next: null}}
//       // After {value: 'Joy', next: {value: 'Matt', next: {value: 'Pavel', next: null}}}
//       // const holdingPointer = this.top;
//       // this.top = newNode;
//       // this.top.next = holdingPointer;

//       const holdingPointer = this.last;
//       this.last = newNode;

//       console.log(holdingPointer);
//     }

//     this.length++;

//     return this;
//   }

//   dequeue() {}
//   //isEmpty;
// }

//Joy
//Matt
//Pavel
//Samir

// Solution: Queue Implementation
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;

    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.length--;

    return this;
  }
  //isEmpty;
}

// const myQueue = new Queue();
const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
// console.log(myQueue);
// console.log(myQueue.peek());
myQueue.dequeue();
// myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.peek());

//Joy
//Matt
//Pavel
//Samir

// Queues Using Stacks
