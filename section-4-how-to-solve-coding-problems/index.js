// Exercise: Interview Question

// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters
// Returns true or false

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "a"];

// Brute Force Solution - O(a*b) Time Complexity - O(1) Space Complexity
// function containsCommonItem(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

/* array 1 ==> obj {
 a: true, 
 b: true, 
 c: true, 
 x: true
}
array2[index] === obj.properties
*/
// O(a + b) - Time Complexity this solution is better
// O(a) Space complexity
// function containsCommonItem(arr1, arr2) {
//   // loop through first array and create object where properties === items in the array
//   let map = {};
//   for (let i = 0; i < arr1.length; i++) {
//     if (!map[arr1[i]]) {
//       const item = arr1[i];
//       map[item] = true;
//     }
//   }
//   // loop through second array and check if item in second array exists on created object
//   for (let j = 0; j < arr2.length; j++) {
//     if (map[arr2[j]]) {
//       return true;
//     }
//   }
//   return false;
// }

// More readable solution
function containsCommonItem(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}
