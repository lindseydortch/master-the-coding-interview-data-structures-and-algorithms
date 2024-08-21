# Section 8: Data Structures: Linked Lists  

## Linked Lists Introduction 
- There are two types of linked lists
  - Singly and doubly linked 
- Arrays we ran into 
  - Static - a certain amount of data or memory that can be allocated next to each other in memory 
  - Both dynamic and static arrays can increase their memory once it hits a certain limit and double up that memory in another location
    - This causes a performance implication of O(n)
  - Arrays had issues with shift and delete 
- Hash tables 
  - Solved some of our issues 
  - Hash tables aren't ordered, so it causes some other issues 
- In comes Linked Lists 

## What Is A Linked List? 
- A list that is linked = linked list 
- Singly linked list 
  - Contains a set of nodes 
    - These nodes have two elements - the data you want to store and a pointer to the next node in line 
    - The first node is called the head and the last node is called the tail 
- Linked lists are null terminated (signifies the end of the list)
- Pointer - common in programming 
  - Data structure an element that links to the next element to the next element until the last element until we get to null 
- JS doesn't come with linked lists built in 
  - Java has linked lists 
  - When you don't have something you build it 

## Exercise: Imposter Syndrome 
- Note on imposter syndrome 

## Exercise: Why Linked Lists? 
- Exercise: why do you think linked lists may be better than hash tables or arrays? 
  - My answer: 
    - Allows us to order our data where hash tables didn't 
    - Allows us to insert data quicker than arrays because we can easily go to the order and change our pointer without completely shifting indexes and having to loop 

## Solution: Why Linked Lists?
- Have a loose structure that allow us to insert a value into the middle of the list 
- In an array elements are indexed, in a linked list you start at the head and traverse the list until you get to the item which is O(n)
  - Traversal is the same idea as iterating 
- An array makes reading from sequential memoery faster than reading from scattered memory 
  - Traversing through a linked list is slower than iterating through an array, but inserting is so much faster 
- You can delete nodes in a linked list faster and we get access to a pointer 
- Linked Lists 
  - preprend - O(1)
  - append - O(1)
  - lookup - O(n)
  - insert - O(n)
  - delete - O(n)

## What Is A Pointer? 
- Pointer - a reference to another place in memory another object or a node 
  - Basically says "hey, this is where this is in memory"
- JavaScript is garbage collected 
  - This means that memory is managed automatically 
    - Memory that has no pointer gets deleted 
  - Lower level languages make you have to delete unused memory 

## Our First Linked List 
- Think of node as a bucket of data 
  - We need a value and then a next
    - The next is the poitner to our next node which will be another object we will reference in memory 
- In theory this is what our linked list should look like 
  - `let myLinkedList = {
      head: {
        value: 10,
        next: {
          value: 5,
          next: {
            value: 16,
            next: null
          }
        }
      }
    };`
- The list will have to start with a head 
- Reminder the constructor is all about creating our very first node, so what we have to have to instantiate our class 

## Solution append() 
- First step is to create a new node with the new value 
- We then set this.tail.next and this.tail to the new node object 
- Note from Q&A to understand why we set this.tail and not this.head 
  - I think the missing link in this case is the reference which this.tail has from the initial state.
  - this.tail points to this.head which means, that this.tail is actually this.head at the beginning.
  - By setting this.tail.next we are setting actually this.head.next.
  - Because we have a new node as our tail, we have to update the this.tail with a reference of newNode.
  - At this point, this.tail is not this.head anymore.
  - After that this.head.next and this.tail have both a reference to newNode stored.

## Solution prepend() 
- prepend does the same as append and creates the node we're going to add 
  - We leave next as null because we are going to create a class for a new node in a later lecture 

## Node Class
- Created a node class for us to follow OOP 

## insert() 
- There is looping involved 

## Quick Note: Upcoming Video 
- Note about adding in a condition to the insert() method solution to fix a bug

## Solution: insert() 
- With all methods, check your parameters 
- A linked list only has reference to the head and tell, so we need a leader and point to the old node 
- You want the object before to hold the value of the index you are looking for, so the leader is going to `index-1` when traversing the object 

## Solution: remove() 
- We set a leader and an unwanted node and then we set the leader.next to the unwantedNode.next 
- This shows us that delete() is O(n) because we have to traverse 
- Linked Lists are very popular in interview questions 
- Up until now we've created a doubly linked list 

## Doubly Linked Lists 
- Doubly Linked Lists 
  - Similar, but links to the node before it 
  - prepend - O(1)
  - append - O(1)
  - lookup - O(n)
  - insert - O(n)
  - delete - O(n)
- head <-- pointer --> node --> null 
  - We point to the node ahead and the previous node 
- Allow us to traverse our list backwards 
  - Exactly the same as a singly linked list, but we can point backwards 
  - Lookups are more efficient than in singly linked lists 
  - We might have to use an extra block of memory 

## Exercise: Doubly Linked Lists
- Note on trying to code your own doubly linked list 

## Solution: Doubly Linked Lists 
- Interviewers love asking questions about linked lists because it requires a lot of information to be held in your head 
  - They can be really complicated if you're not the type of person who thinks through your steps and understand what they're doing one by one 
  - The interviewer really gets to see you think through what you're doing 

## Singly vs Doubly Linked Lists 
- Single vs Double 
  - Single 
    - Pro 
      - Simple implementation 
      - Less memory 
      - Delete and insert it is a little bit faster 
    - Con
      - Can not be iterated in reverse 
      - If we ever lose the reference to the head, the memory can be lost forever 
    - When to use
      - When you have less memory or memory is really expensive and you want to be careful of how much you use and your main goal is that you want to do fast insertion and deletion and you don't have that much searching 
  - Double 
    - Pros 
      - Can be traversed from front to back or back to front 
      - You don't need to traverse from the head and find what the previous node is whicha singly linked list has no concept of 
    - Cons 
      - Is complex to implement 
      - Requires more memory and storage because of this extra property 
        - There are some extra operations we need to perform to make sure that when we do insert and delete that the previous property is updated as well
    - When to use 
      - When you don't have that much limitation on memory  
      - When you want good operation for searching for elements such as searching backwards instead of just forwards
- Most of the time in interviews you're going to see a singly linked list 

## Exercise: reverse() 
- We will use a singly linked list for this 

## Solution: reverse() 
- This is one of the problems that you really have to draw out 

## Linked Lists Review 
- Linked lists are low level data structures 
  - Used a lot in hash tables 
- Linked Lists 
  - Pros 
    - Fast insertion 
    - Fast deletion 
    - Ordered 
    - Flexible size 
  - Cons 
    - Slow lookup 
    - More memory 
- You'll see linked lists in a lot of place like 
  - Implementing files systems on your computer 
  - Browser History 
  - Combining two nodes for data that has a collision in a hash table 
- Linked lists are related to trees and graphs which we will talk about in later sections