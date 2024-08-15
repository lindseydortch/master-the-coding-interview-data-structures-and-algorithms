// Arrays Introduction
// const strings = ["a", "b", "c", "d"];
// // 4x4 = 16 bytes of storage

// // strings[2];

// // push - insert
// strings.push("e"); // O(1)
// console.log(strings);

// // pop - delete
// strings.pop(); // O(1)
// strings.pop(); // O(1)

// // unshift - add to beginning of array
// strings.unshift("x"); // O(n)

// splice - add something in the middle of the array
// strings.splice(2, 0, "alien"); // O(n/2) = O(n)

// Static vs Dynamic Arrays

// C++
// int a[20] - I want an array that has space of 20 items (numbers since int is numbers)

// Optional: Classes In JavaScript

// Reference Type - Non-primitive type
// [] === []; //false
// var object1 = { value: 10 };
// var object2 = object1;
// var object3 = { value: 10 };

// object1 === object2; // true
// object1 === object3; // false
// object1.value = 15;
// object2.value; // 15
// object3.value; // 10

// Context vs Scope
// Scope
// function b() {
//   let a = a;
// }
// // Context
// console.log(this === window); // true when in the browser
// function a() {
//   console.log(this); // window
// }

// const object4 = {
//   a: function () {
//     console.log(this); // object4
//   }
// };

// // Instantiation
// class Player {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }

//   introduce() {
//     console.log(`Hi I am ${this.name}. I am ${this.type}`);
//   }
// }

// class Wizard extends Player {
//   constructor(name, type) {
//     super(name, type);
//   }
//   play() {
//     console.log(`WEEEEE I'm a ${this.type}`);
//   }
// }

// const wizard1 = new Wizard("Shelly", "Healer");
// const wizard2 = new Wizard("Shawn", "Dark Magic");

// Implementing An Array
// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }

//   // access
//   get(index) {
//     return this.data[index];
//   }

//   // push - adding to array
//   push(item) {
//     // object['property] = value
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }

//   // pop - remove last item of the array
//   pop() {
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//   }

//   // delete - O(n)
//   delete(index) {
//     const item = this.data[index];
//     this.shiftItems(index);
//     return item;
//   }

//   shiftItems(index) {
//     for (let i = index; i < this.length; i++) {
//       this.data[i] = this.data[i + 1];
//     }
//     delete this.data[this.length - 1];
//     this.length--;
//   }
// }

// const newArray = new MyArray();
// newArray.push("hi");
// newArray.push("you");
// newArray.push("!");
// console.log(newArray);
// newArray.delete(1);
// // newArray.pop();
// console.log(newArray);

// Exercise: Reverse a String
// Create a function that reverses a string: 'Hi my name is Andrei' should be: 'ierdnA si eman ym iH'

// My solution
// function reverse(str) {
//   let splitStr = str.split(" ").reverse();
//   let reverseWord = splitStr.map(word => word.split("").reverse().join(""));
//   return reverseWord.join(" ");
// }

// const rev1 = reverse("Hi my name is Lindsey");
// console.log(rev1);

// Solution: Reverse a String
// function reverse(str) {
//   // Check input
//   if (!str || str.length < 2 || typeof str !== "string") {
//     return "hmmm that's not good";
//   }

//   const backwards = [];
//   const totalItems = str.length - 1;

//   for (let i = totalItems; i >= 0; i--) {
//     backwards.push(str[i]);
//   }
//   // console.log(backwards);

//   return backwards.join("");
// }

// reverse("Hi my name is Lindsey");

// readable solution
// function reverse2(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverse2("Hi my name is Lindsey"));

// ES6
// const reverse3 = str => str.split("").reverse().join("");
// const reverse3 = str => [...str].reverse().join("");

// console.log(reverse3("Hi my name is Lindsey"));

// Exercise: Merge Sorted Arrays
// function mergeSortedArrays(arr1, arr2) {
//   const mergedArr = [...arr1, ...arr2];
//   console.log(mergedArr);
//   return mergedArr;
// }

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
// [0, 3, 4, 31, 4, 6, 30]

// Solution: Merge Sorted Arrays
function mergeSortedArrays(array1, array2) {
  const mergedArr = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  // Check input
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArr.push(array1Item);
      array1Item = array1[1];
      array1Item = array1[i];
      i++;
    } else {
      mergedArr.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArr;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
