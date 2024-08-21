// What Is A Linked List?

// Pseudo-code
// const basket = ["apples", "grapes", "pears"];

// linked list: apples --> grapes --> pears

// apples
// 8497 --> grapes
//           8742 --> pears
//                     372 --> null

// What Is A Pointer?
// In the example below in memory when we look at our RAM there's only one entry, both obj1 and obj2 point to the same location in memory
// let obj1 = { a: true };
// let boj2 = obj1;
// obj1.a = "booya";
// delete obj1; // will delete the memory that is unused because we have the pointer above
// console.log("1", obj1);
// console.log("2", obj1);

// Our First Linked List
// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  // My append solution
  // append(value) {
  //   // code here
  //   if (this.tail === this.head) {
  //     this.head.next = { ...this.head, value: value, next: null };
  //     this.tail = this.head.next;
  //     this.length++;
  //   }
  // }

  // Andrei Solution
  append(value) {
    const newNode = new Node(value);
    // const newNode = {
    //   value: value,
    //   next: null
    // };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // My prepend solution
  // prepend(value) {
  //   const newNode = {
  //     value: value,
  //     next: this.head
  //   };
  //   this.head = newNode;
  //   this.tail = this.head.next;
  //   this.length++;
  // }

  // Andrei's prepend
  prepend(value) {
    const newNode = new Node(value);
    // const newNode = {
    //   value: value,
    //   next: null
    // };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  // My insert solution
  // insert(index, value) {
  //   let array = [];
  //   const newNode = new Node(value);

  //   let currentNode = this.head;
  //   // while(currentNode !== null)
  //   while (currentNode !== null && array.length !== index) {
  //     console.log(currentNode);
  //     array.push(currentNode.value);
  //     currentNode = currentNode.next;
  //     newNode.next = this.head;
  //     this.head = newNode;
  //     this.length++;
  //   }
  //   return this;
  // }

  // Andrei's solution
  traverseToIndex(index) {
    // check params

    let counter = 0;

    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    // check params
    if (index >= this.length) {
      this.append(value);
      this.length++;
    }
    if (index === 0) {
      this.prepend(value);
      this.length++;
      return this.printList();
    }
    const newNode = new Node(value);

    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  // My delete solution
  // remove(index) {
  //   const leader = this.traverseToIndex(index);
  //   const holdingPointer = leader.next;

  //   this.length--;
  //   console.log(leader);
  //   console.log(holdingPointer);
  //   return this.printList();
  // }

  // Andrei's solution
  remove(index) {
    // check params

    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head; // ref to first - 1
    this.tail = this.head;
    let second = first.next; // ref to second el - 10

    while (second) {
      // [1, 10, 16, 88]
      const temp = second.next; // 16
      second.next = first; // 10 becomes 1
      first = second; // 1 becomes 10
      second = temp; // second item becaomes 16
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
// console.log(myLinkedList.printList());
myLinkedList.insert(2, 99);
// console.log(myLinkedList.printList());
// console.log(myLinkedList);
// myLinkedList.remove(3);
// console.log(myLinkedList.printList());
console.log(myLinkedList.printList());
console.log(myLinkedList.reverse());
console.log(myLinkedList.printList());

// Double Linked Lists
class DoubleLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  // My append solution
  // append(value) {
  //   const newNode = new Node(value);
  //   this.head.previous = this.tail.next;
  //   this.tail.next = newNode;
  //   this.tail = newNode;
  //   this.length++;
  //   return this;
  // }

  // Andrei Solution
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // My prepend solution
  // prepend(value) {
  //   const newNode = new Node(value);
  //   this.head.previous = newNode.value;
  //   newNode.next = this.head;
  //   this.head = newNode;
  //   this.length++;
  //   return this;
  // }

  // Andrei's prepend
  prepend(value) {
    const newNode = new Node(value);
    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  // My insert solution
  // traverseToIndex(index) {
  //   // check params

  //   let counter = 0;

  //   let currentNode = this.head;
  //   while (counter !== index) {
  //     currentNode = currentNode.next;
  //     counter++;
  //   }
  //   return currentNode;
  // }

  // insert(index, value) {
  //   // check params
  //   if (index >= this.length) {
  //     this.append(value);
  //     this.length++;
  //   }
  //   if (index === 0) {
  //     this.prepend(value);
  //     this.length++;
  //     return this.printList();
  //   }
  //   const newNode = new Node(value);

  //   const leader = this.traverseToIndex(index - 1);
  //   const holdingPointer = leader.next;
  //   leader.next = newNode;
  //   newNode.next = holdingPointer;
  //   this.length++;
  //   return this.printList();
  // }

  // Andrei's solution
  traverseToIndex(index) {
    // check params

    let counter = 0;

    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    // check params
    if (index >= this.length) {
      this.append(value);
      this.length++;
    }
    if (index === 0) {
      this.prepend(value);
      this.length++;
      return this.printList();
    }
    const newNode = new Node(value);

    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.next = follower;
    newNode.prev = leader;
    follower.prev = newNode;
    this.length++;
    return this;
  }

  // My delete solution
  // remove(index) {
  //   const leader = this.traverseToIndex(index - 1);
  //   const unwantedNode = leader.next;
  //   leader.next = unwantedNode.next;
  //   this.length--;
  //   return this.printList();
  // }

  // Andrei's solution
  remove(index) {
    // check params
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
}

const myDoubleLinkedList = new DoubleLinkedList(10);
myDoubleLinkedList.append(5);
myDoubleLinkedList.append(16);
myDoubleLinkedList.prepend(1);
// console.log(myDoubleLinkedList.printList());
myDoubleLinkedList.insert(2, 99);
// console.log(myDoubleLinkedList.printList());
// console.log(myDoubleLinkedList);
// myDoubleLinkedList.remove(3);
// console.log(myDoubleLinkedList.printList());
