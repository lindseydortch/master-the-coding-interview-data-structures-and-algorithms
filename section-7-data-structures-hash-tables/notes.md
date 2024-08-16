# Section 7: Data Structures: Hash Tables  

## Hash Tables Introduction 
- Hash tables 
  - Also called - hash maps, dictionaries, objects 
  - Most common interview questions, you're going to use them in any coding question 
  - Luckily pretty much every language has their own hash tables 
  - You see these a lot in databases and caches 
  - Hash tables contain key/value pairs 
    - key - used as the index of where to find the value in memory 
      - This is done with a hash function 
      - Key goes to the hash function that does some magic and then out comes a key with an index where we want to store this 
        - Key and value are both stored 
        - Our imaginary box decides where this goes in our memory 

## Hash Function 
- Hash function - a function that generates a value of fixed length for each input that it gets 
  - Md5 - type of hash function 
    - SHA-1 or SHA-256 are other hash functions 
  - We give a hash function an input and the function generates a random pattern 
- Key aspects of hash functions 
  - It's one way 
    - When you get the input, you have no idea what it was 
  - Once you change one thing it changes the output 
    - You keep putting in `hello` and change to `help` it changes it 
    - Indempotent - a function given an input always outputs the same output 
    - This gives us really fast data access 
- With hash tables all we need to look something up we give it a key and we know exactly where that item is in our memory 
- Our hash functions need to be really fast
  - SHA-256 take a really long time to generate a hash - uses a lot in cryptography 
  - We leave our hash function to whatever framework or language you are using 

## Hash Collisions
- Hash Tables 
  - insert - O(1)
    - We hash the key through the hash function and inserts it for us 
  - lookup - O(1)
    - Again we use the hash function 
  - delete - O(1)
    - We don't have to shift indexes like we do with arrays 
  - search - O(1)
    - Hash functions again make this O(1)
- Pros and Cons 
  - Pros 
    - Very fast time complexity 
  - Cons 
    - When we create an object or hash table, the computer decides where it should go 
    - There is nothing to tell the hash function to evenly distribute until everything is full 
    - It matters what we put into the hash 
- With hash tables we cannot avoid collisions 
  - We constantly keep adding to the same memory space, this slows down our access and insert information 
  - Theoretically when you have a collision it slows down accessing and inserting to O(n/k) = O(n)
- Collision will happen in any hash table implementation 
  - Luckily we'll never have to implement these ourselves and it's not a very common interview question, but you do want to know about them and how to deal with them 
- There are two common ways to deal with them 
  - Linked Lists 
  - Separate Chaining 
  - There are more these are the most common 

## Hash Tables In Different Languages 
- Most of the time key and value can be any type of data structure 
  - Function 
  - Another Object 
  - Arrays 
    - We can have arrays of objects
  - Keys that are more than just strings 
- In JS, you pass a key that is a number or a function it gets stringified 
  - In new ES6 you get access to maps and sets 
  - Maps - allows us have functions or arrays as keys 
    - Allows us to maintain insertion order 
  - Sets - similar to map, only stores the keys, no values 

## Exercise: Implement A Hash Table
- We have a template for us with a hash function 
  - The hash function generates a hash for us 
- We need to create a `get()` and `set()` function 

## Solution: Implement A Hash Table
-  _ - private properties 
   -  In JS you can still access this method, but this is a developer standard to let other developers know, hey don't try to access this 

## keys() 
- Downside of hash tables - we had to loop through our Array 50 times to get the keys 
  - There's no guaranteed order
    - We're putting items randomly in a shelf, but when we retrieve them, they're all unordered  

## Extra: keys() Without Collision 
- Code for solution to the keys() function on our hash table without collision 

## Hash Tables vs Arrays 
- Arrays 
  - search - O(n)
  - lookup - O(1)
  - push* - O(1)
  - insert - O(n)
  - delete - O(n)
- Hash Tables 
  - search - O(1)
  - insert - O(1)
  - lookup - O(1)
  - delete - O(1)
- This is why you see hash tables in databases 
  - Most of the time inserts are faster in hash tables (minus collision issues)
  - Hash tables is like a hack on top of an array to let us use keys 
  - Hash tables are unordered vs arrays which are ordered 

## Exercise: First Recurring Character 
- This question comes from Google 

## Solution: First Recurring Character 
- For the nested for loop instead of setting j=0, you say i+1 so that we're always going to the right of i
- Non-brute force solution, we use an object 
  - Add all the items to a hash table and while we're doing that we can check to see if the property key already exists 
- We made our function have time complexity of O(n), but with 1 downside, we increased the memory (space complexity) by O(n) because we're creating a new object in this function that needs to keep track of our all the items in the array, so if it loops to the end and none of it is true, we have to hold the entire array in this object  

## Interesting Tidbit: Python Dictionaries 
- Python made their hash tables (dictionaries) ordered by default 
  - So this means there are less differences between a hash table and an array in Python 

## Hash Tables Review 
- Hash Tables 
  - Pros 
    - Fast lookups* 
      - *Good collision resolution needed 
    - Fast inserts 
    - Flexible keys 
  - Cons 
    - Unordered 
    - Slow key iteration - looping through all the keys 
- Collision - can be resolved through linked lists 
- We learned that hash tables make our time complexity better, but the tradeoff is a higher space complexity 