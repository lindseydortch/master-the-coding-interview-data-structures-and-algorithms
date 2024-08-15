# Section 6: Data Structures: Arrays 

## Arrays Introduction 
- Arrays - sometimes cold lists 
  - Organizes items sequentially in memory 
  - Simplest and most widely used data structures 
    - They have the smallest footprint of any data structure 
- Array 
  - lookup O(1)
  - push O(1)
  - insert O(n)
  - delete O(n)
- strings[2]
  - Go to the 2 index and grab it 
- Pros 
  - Great for accessing data
- Cons
  - Not great for inserting and deleting in an array 

## Static vs Dynamic Arrays
- Static 
  - Fixed in size, you need to specify the number of elements your array will hold a head of time 
  - Because arrays are allocated in adjacent blocks in memory 
- Dynamic
  - Allow us to copy and rebuild an array in a new location 
  - lookup - O(1) 
  - append* - O(1) (can be O(n))
    - Machine originally creates the 4 blocks of memory and because of a dynamic array it copies it and moves to a new location with 8 blocks of memory (based of array example in index.js)
  - insert - O(n)
  - delete - O(n)
- We don't allocate memory for our arrays because they work like dynamic arrays 
  - They automatically allocate memory according to the increase in size to the array 
  - C++ allow you to manage memory, lower-level languages you don't have to worry about managing your memory 

## Quick Note: Upcoming Video 
- We will be building our data structutes using the `Class` keyword in JavaScript 
  - This was chosen because it is the most familiar with most languages 

## Optional: Classes In JavaScript
- Three things are important with classes 
  - Reference Type 
    - Non-primitive types - created by the programmer 
      - JS knows its primitive types 
      - When one object references another it references the box where the object was placed it is based off of 
        - The other objects not being referenced get their own box 
  - Context 
    - Context vs scope 
      - Scope - created when JS sees {} 
        - When we create a function there is a new scope created 
        - Lives within it's universe and knows nothing about the root scope 
      - Context 
        - Tells you where we are within the object
        - this - what is the object environment that we're in right now?
          - Basically what is to the left of the . 
        - This is important for instantiation 
  - Instantiation 
    - When you make a copy of an object and reuse the code 
    - Making instances or multiple copies of an object 
- At the end of the day arrays are just objects 
- Think of a class as something you want to make a copy of 
  - Constructor 
    - We use a constructor to create properties when the class is run 
    - Every time I'm making a copy run this constructor function first 
  - You can create methods 
  - You can access a property from the constructor, you use the `this` keyword 
  - Anytime we extend a class we use the super keyword to call the constructor function of the player, this is where super() comes in 
  - The `new` keyword sees that we're creating a new class 
  - When running it runs the extended class and then the original class 
- Before classes we had classical inheritence 
- When we say class we're telling JavaScript, 'Hey we're probably going to make a copy of this'
  - When we use the `new` keyword we're telling JavaScript, 'Make an instance of Wizard and then use the Player class'

## Implementing An Array 
- It's good to understand how to build an array 
  - You won't be asked to build an array from the beggining, but this gives us more knowledge to know the fundamentals 
  - We can create whatever data structure we want, most languages have the most common data structures built in
  - Most structures are built on top of other data structures 
- In JavaScript arrays are just objects with integer based keys that act like indexes 
  - Different languages will have it implemented differently 
- JS has type as undefined when there is nothing in an object 
- In our for loop on the `shiftItems` function we use `let i = index` because we want to start the loop whereever we are removing something and not at 0
- `this.data[i] = this.data[i + 1];`
  - take each item in the data we have instead of what we have before add the data next to it and add to it
  - We're shifting the items to the left by one 

## Strings and Arrays 
- In interviews, we should treats string questions as arrays 
  - Convert string into an array and then split and then return it as a string 

## Exercise: Reverse a String 
- Introduced Exercise To Solve 

## Solution: Reverse a String 
- Depending on what language you, use you may have built in methods that may make your code a lot more readable 
- You want to talk through the problem and explain the pros and cons of using each solution 

## Exercise: Merge Sorted Arrays 
- Introduced Exercise To Solve 

## Solution: Merge Sorted Arrays 
- In my solution, I didn't account for sorting 
- In the interview if you're having to log out and over explain, it may mean you need to extract out pieces of code into their own function and make it more readable and how you would imporove things 

## Interview Questions: Arrays 
- TODO: 5 array leetcode questions and 2 bonus array questions as review over the weekend 
- Link to extra exercises you can practice 

## Arrays Review 
- We talked about static and dynamic arrays 
- How to treat questions with strings as array questions 
- We wrote out how to implement our own Array using JavaScript 
- Pros and Cons 
  - Pros 
    - Fast lookups 
    - Fast push/pop 
    - Ordered 
  - Cons 
    - Slow inserts 
    - Slow Deletes 
    - Fixed Size* 
      - If using static array 