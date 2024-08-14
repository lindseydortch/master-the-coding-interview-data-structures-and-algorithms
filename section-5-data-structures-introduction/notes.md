# Section 5: Data Structures: Introduction  

## Section Overview 
- Data Structure - A collection of values 
- Algorithms - The steps or processes we put into place to manipulate these values 
- Data Structures + Algorithms = Programs 
  - No matter what language you use, these are the fundamentals of any language 

## What Is A Data Structure? 
- What Is a Data Structure? 
  - Each data structure is good and is specialized for it's own thing 
  - Think of data structures of a compartment or a container
    - Each container is useful for it's own thing
      - Think of food going in a fridge or school supplies going into a backpack, you wouldn't put a popsicle in a backpack and vice versa 
    - We can put and take things from data structures 
- In programming we have a ton of data structures   
  - There are really in 5-6 data structures 
  - Blockchain is simply a data structure - just a way to hold information 
  - Arrays and objects are data structures 
- There are always tradeoff's 
- There are two parts to understanding data structures 
  - How to Build One 
    - Most of the time they are already built out for us 
  - How to Use It 
    - The most important thing to learn is when to use what data structure 

## How Computers Store Data
- Random Access Memery - stores variables 
  - You lose the memory when the computer turns off 
- Storage - where we store music files, videos, documents, etc. 
  - Persistent
    - This is slow 
- CPU - does all the little calculations we need 
  - Needs access to the RAM and Storage 
    - Can access from the RAM a lot faster 
- Example 
  - We run google Chrome 
    - CPU - var a = 1 
      - We run the CPU 
      - When a variable is decalred it holds that in our RAM 
      - And then we close Google Chrome, we want to be able to remember it, the CPU will take the variable from the Storage 
- RAM - think of as a message storage area with shelves that are numbered (addresses)
  - Each shelf holds 8-bits or numbers 
    - Address - Bit 0 or 1 
    - 8 bits is called a Byte 
      - Each shelf has 1 byte of storage 
  - Memory controller - connected to CPU 
    - Does the reading and writing of the memory 
    - The direct connection is important because this means we can access things in the RAM 
  - RAM is fast because we can access information easily because of how it is stored 
  - The closer the information is to the CPU it will be faster to look up 
  - Computers have a CPU cache 
    - ALU cache is a common one you might heat about 
- Why is this important for data structures? 
  - integers are represented in 32bits - with recent upgrades we can now get access to 64bits 
  - Systems that are 
    - 8-bit - 255 
    - 16-bit - 65,536
    - 32-bit - 2,147,483,647
    - 64-bit - 9,223,372,036,854,775,807
- Integer overflow 
  - A computer can only hold so much information 
  - Math.pow(6, 1000) => infinity 
  - As a number becomes too large to store in our RAM, we need to be represent this number we cannot store into something that is tangible, in JS this infinity 
    - Any number above a certain threshold will show as infinity 
- Data structures are just an arrangement of data 
  - Our goal is to minimize our operation for the CPU to get the information 

## Data Structures In Different Languages 
- The main data structures you need to learn because they are used 90% of the time 
  - Data Structures 
    - Arrays 
    - Stacks 
    - Queues 
    - Linked Lists 
    - Trees
    - Tries 
    - Graphs 
    - Hash Tables 
  - Algorithms 
    - Sorting 
    - Dynamic Programming 
    - BFS + DFS (Searching)
    - Recursion 
- As long as you learn when and why to use these, you'll be miles ahead of others
- Each language has their own built in data types 
  - JS for instance has 
    - numbers 
    - Strings 
    - Booleans 
    - undefined
    - Allows us to structure information 
      - Arrays 
      - Objects 
- This doesn't mean we're limited to using the built in JS, we can build and create our own data structures 
- Use the map to see how the different data structures are connected when you need a visual 

## Operations On Data Structures 
- The data structures we will see throughout the course are simply variations of how we store that data on our computers 
  - Some are good at certain operations and others at other operations 
- Actions 
  - Insertion - add a new data item in a given collection of items 
  - Deletion - delete data 
  - Traversal - access each data item once so it can be processed
  - Searching - we want to find out the location of a data item if it exists in a given collection 
  - Sorting - having data that is sorted 
  - Access - the main one
    - How do we access the data that we have on our computer 
- Half of our data structures are trees and variations of trees 
  - On the big O cheatsheet you can see the Big O of each of them 