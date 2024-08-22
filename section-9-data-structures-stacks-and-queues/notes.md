# Section 9: Data Structures: Stacks + Queues  

## Stacks + Queues Introduction 
- Stacks and Queues 
  - We will learn to at the same time because they are both considered linear data structures 
- Linear Data structures allow us to traverse (go through elements sequentially, one by one) in which only one data element can be directly reached
- They can be implemented in similar way, the only difference is how to item gets removed 
  - Unlike an array there is no random access operation like with arrays 
  - You mainly use stacks queues to run commans like push, peak and pop all of which deal exclusively with the element at the beginning or the end 
- Why would we ever want to use something like this? 
  - Sometimes it's good to have these higher level data structures that are built on top of lower level ones like link lists and arrays to limit the operations you can do on them  

## Stacks 
- Stacks 
  - LIFO - Last In First Out 
    - Think of it as a tack of plates, you can only access the item on top until you get to the bottom 
- When are stacks important? 
  - When you need to know the very last value that was seen or added
  - Very important in language specific engines  
    - Like Stack Overflow 
  - Most programming languages are modeled with the stack architrcture in mind 
    - When functions get called in a programming language, usually they follow this model of last in first out, a function within a function within a function is called and we start popping until we get to the end 
  - Another example this can be used is the browser back option 
  - You store the previous state of your work in the memory in such an order that the last one appears first 
- - Stacks 
  - lookup - O(n)
  - pop - O(1)
  - push - O(1)
  - peek - O(1) - view the last item in the stack 

## Queues 
- Queues 
  - FIFO - First In First Out 
    - Like an entrance to a rollercoaster, the first person in line gets to go 
- Used a lot in interview questions 
- Commonly used 
  - Wait list app like to buy concert tickets 
  - Restaurant app where you check into the resturaunt to see if you can get a table 
  - Uber or Lyft 
  - A printer - the person who clicks print first gets their stuff printed 
- Queues 
  - lookup - O(n)
  - enqueue - O(1) - add someone
  - dequeue - O(1) - remove person, takes the first person 
  - peek - O(1) - tells us what the first item in the list 
- Why would you not want to use an array to build a queue? 
  - It's not very efficient, because we're removing the first item, so you have to shift all the indexes 

## Exercise: Stacks vs Queues 
- JS doesn't have its own stacks and queues data structures 
- Stacks have a top and a bottom, it can be built with either arrays or linked lists 
- Why would we use a stack or a linked list over the other? 
  - My answer: 
    - For stacks you would want to use an array because the delete is an O(1), whereas the delete would take more time complexity with a linked list 
    - For Queues you would want to use a linked list because to remove the first item you would have to unshift the items from the array 

## Solution: Stacks vs Queues 
- Stacks
  - Both arrays and linked lists work here 
  - Arrays allow cache locality, which makes them technically faster when accessing its items in memory because they're right next to each other versus a linked list 
  - Linked lists have extra memory associated with them because we have to hold on to those pointers, but they have more dynamic memory 
  - You have to think about what sort of operations you're going to do and what your priorities are 
- Queues 
  - Linked Lists - all we have is a pointer and pointer to the tail and then remove the head and move the head to the next item 
  - Arrays have indexes associated with them, if we needed to remove the first, we have to shift the indexes over, it becomes O(n)

## Quick Note: Upcoming Video 
- Note on if the next video 

## Optional: How JavaScript Works 
- Questions you could get asked in an interview
  - How does JS actually work?
  - Explain the difference between synchronous and asynchronous in JavaScript? 
  - Or what doed JavaScript is a single threaded language that can be non-blocking mean? 
- What is a program? 
  - Allocate memory 
  - Parse and execute (Read and run commands)
- JavaScript Engine 
  - Chrome - V8 
  - Engine consists of 
    - Memory Heap - memory allocation 
      - Memory Leak
        - When you have unused memory just laying around it fills up the memory heap 
        - This is why you might hear that global variables are bad 
          - If we don't forget to clean up after ourselves, we fill up this memory heap and eventually the browser will not be able to work 
    - Call stack - where code is read and executed 
      - Tells you where you are in the program 
      - Reads the first line, then pops it onto the call stack and then it runs it and then removes it and then places the next line and continues until it is done 
- JavaScript is a single threaded language that can be non-blocking 
  - Single threaded - one call stack and one call stack only 
  - First In Last Out 
  - Multi-threaded - languages with multiple call stacks 
  - JS was designed to be single-threaded because running code on a single thread can be quite easy since you don't have to deal with complicated scenarios that can arise in multi-level environments 
    - You have one thing to worry about 
    - You can have dead locks 
- Synchronous vs Asynchronous 
  - Synchronous 
    - The latetr can't before the first finishes 
    - Stack overflow - when a stack is overflowing 
      - The call stack gets bigger and bigger until it just doesn't have enough space anymore 
      - To create a stack overflow: 
        - `function foo() {foo()} foo` = recursion 
      - Recursion is a function that calls itself 
    - With synchronous tasks if we have one function that takes up a lot of time, it's going to hold up the line 
    - Non-blocking - we don't wait around for things that take time 
    - Synchronous is great because it's predictable - we know what happens first then next and then after that 
  - Asynchronous 
    - Using a setTimeout() is an example 
- JavaScript Run-Time Environment 
  - With the engine we also get access to Web APIs
    - DOM (document)
    - AJAX (XMLHttpRequest)
    - Timeout (setTimeout)
  - Event Loop <-- Callback Queue (onClick, onLoad, onDone)
    - Checks all the time if the call stack is empty and then checks the callback queue and then moves the callback onto the call stack 
  - Since setTimeout is not part of JS it is part of the Web API it gets special behavior 
- Review
  - JS is asynchronous when you can leave it a message and leave it a callback 
  - When is asynchronous happening? 
    - Try and talk between machine like speaking to a database, making network requests, image processing, reading files 
  - JS is a single-threaded language that can be non-blocking  
    - It has one call stack and it does one thing at a time 
    - In order to not block the single thread it can be asynchronous with callback functions and these callback functions get run in the background through the callback queue and then the event loop to bring it back into the call stack 

## Exercise: Stack Implementation (Linked Lists)
- The template has been created for our structure of our stack 
  - We will be using linked lists to implement our stacks 
  - We don't have to use the one we created in the last section, we can use the Node class in the template 
- Create three methods that work 
  - peek() 
  - push() 
  - pop() 
  - isEmpty() - check that steck is empty 

## Solution: Stack Implementation (Linked Lists)
- Walked through solution for writing out the stack with a linked list 

## Exercise: Stack Implementation (Array)
- Convert the stack to use arrays instead of linked lists, this should be super simple because we have access to push and pop with arrays in JS 

## Solution: Stack Implementation (Array)
- Walked through solution on implmenting stacks with an array 

## Exercise: Queue Implementation
- Introduction to creating our own queue implementation 

## Solution: Queue Implementation 
- Solution on creating our own queue implementation 

## Queues Using Stacks 
- The most common interview question is to implement a queue using a stack 
  - This question is on leetcode, we can see the solution explained  
- TODO: come back and try implementing this myself during review time 

## Stacks + Queues Review 
- Stacks - plates 
- Queues - line 
- Pros and Cons 
  - Pros 
    - Fast operations 
    - Fast peek 
    - Ordered 
  - Cons 
    - Slow lookup 