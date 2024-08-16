// Hash Collisions
// let user = {
//   age: 54,
//   name: "Kylie",
//   magic: true,
//   scream: function () {
//     console.log("ahhhhh!");
//   }
// };

// user.age; // O(1) - access
// user.spell = "abra kadabra"; // O(1) - insert
// user.scream(); // O(1) - access

// Exercise: Implement A Hash Table
// class HashTable {
//   constructor(size) {
//     this.data = new Array(size);
//     // [<2 empty items>,['grapes', 100000], <4 empty items>]
//   }

//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * i) % this.data.length;
//     }
//     return hash;
//   }

//   get(key) {
//     const hash = this._hash(key);
//     return this.data[hash];
//   }

//   set(key, value) {
//     let arr = [];
//     const hash = this._hash(key);
//     arr.push(hash);
//     arr.push(value);

//     this.data.push(arr);
//   }
// }

// const myHashTable = new HashTable(50);
// myHashTable.set("grapes", 10000);
// myHashTable.get("grapes");
// myHashTable.set("apples", 9);
// myHashTable.get("apples");
// console.log(myHashTable);

// Solution: Implement A Hash Table + keys()
// class HashTable {
//   constructor(size) {
//     this.data = new Array(size);
//     // [['grapes', 100000]]
//   }

//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * i) % this.data.length;
//     }
//     return hash;
//   }

//   get(key) {
//     let address = this._hash(key);
//     const currentBucket = this.data[address];
//     if (currentBucket) {
//       for (let i = 0; i < currentBucket.length; i++) {
//         if (currentBucket[i][0] === key) {
//           return currentBucket[i][1];
//         }
//       }
//     }
//     return undefined;
//   }

//   set(key, value) {
//     // Store this data in this address into the hash generated
//     let address = this._hash(key);
//     if (!this.data[address]) {
//       this.data[address] = [];
//     }
//     this.data[address].push([key, value]);
//     return this.data;
//   }

//   // Loop through all the keys of our hash table
//   keys() {
//     const keysArray = [];
//     for (let i = 0; i < this.data.length; i++) {
//       if (this.data[i]) {
//         keysArray.push(this.data[i][0][0]);
//       }
//     }
//     return keysArray;
//   }
// }

// const myHashTable = new HashTable(50); // Change to 2 to show hash collision
// myHashTable.set("grapes", 10000);
// myHashTable.get("grapes");
// myHashTable.set("apples", 9);
// myHashTable.set("oranges", 30);
// myHashTable.get("apples");
// console.log(myHashTable);
// // console.log(myHashTable.keys());

// Exercise: First Recurring Character
//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// function firstRecurringCharacter(input) {
//   const nums = [];
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === input[i + 1]) {
//       return input[i];
//     }
//     nums.push(input[i]);
//     for (let j = 0; j < nums.length; j++) {
//       // console.log(`i: ${input[i]}, j: ${input[j]}`);
//       if (input[i] === input[j]) {
//         return input[i];
//       }
//     }
//   }
// }

// console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecurringCharacter([2, 3, 4, 5]));
// console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

// Solution: First Recurring Character
//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// Brute Force - O(n^2)
// function firstRecurringCharacter(input) {
//   for (let i = 0; i < input.length; i++) {
//     for (let j = i - 1; j >= 0; j--) {
//       if (input[i] === input[j]) {
//         return input[i];
//       }
//     }
//   }
//   return undefined;
// }

// Better Big O - O(n)
function firstRecurringCharacter(input) {
  let map = {};
  for (let i = 0; i <= input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
    // console.log(map);
  }
  return undefined;
}

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 3, 4, 5]));
console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));
