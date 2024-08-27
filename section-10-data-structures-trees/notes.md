# Section 10: Data Structures: Trees  

## Trees Introduction 
- Trees 
  - A data structure that have what we call a hierarchical structure as opposed to something like linked lists or arrays which are linear 
    - Trees can have 0 or more child nodes 
    - Example 
      - Root -> Parent -> Child (- Sibling) -> Leaf 
  - Trees usually start with a single root node or a parent node and every child of the tree descends from this root node 
    - Every child of a node descends from only one parent 
  - Leaf nodes, the very end of a tree data structure 
  - Parent -- child is unidirectional 
  - Example is the DOM 
  - Computers used to make a tree data structure to make a decision 
    - Comments on facebook is an example 
- Abstract Syntax Tree
  - This is how code is run, so the computer understands what we give it 
- Nodes can contain anything we want 
- Linked List is one type of tree with one direction 
- A node can only point to a child 
  - Nodes don't really have to reference their parent 
- There are multiple type of tree data structures, each has their own use case 
  - Once you understand a tree, all the other trees we see are just variations 

## Binary Trees
- Binary Tree 
  - A type of tree with a few rules applied to it 
    - Each node can only have either zero one or two nodes and each child can only have one parent 
    - Each node represents a certain state 
  - We can represent a binary tree as simply having a value and then a left or a right property 
- Terminology 
  - Perfect Binary Tree 
    - Means there are no gaps in the tree, there is no node that has one child 
      - A node either has zero children or two children and the bottom layer of the tree is completely filled nothing is missing 
    - Really efficient and desirable 
      - The number of total nodes we have on each level doubles as we move down the tree 
      - The number of nodes on the last level is equal to the sum of the number of nodes on all the other levels plus one 
        - All the nodes above equal the bottom row 
        - Half of our nodes are on the last level 
        - We have half of our data in the bottom level, so we have some efficiencies 
  - Full Binary Tree 
    - A node has either ero or two children but never one child 
- Binary Search Tree 
  - lookup - O(log N)
  - insert - O(log N)
  - delete - O(log N)

## O(log n)
- Log n simply means based on the height, the maximum number of decisions that we're going to take is log n 
  - That means is this the node we're looking for and we either go left or right 
  - There's effenciency 
- O(log N)
  - The choice of the next element on which to perform some sort of action is one of several possibilities and only one needs to be chosen we don't have to check both 
  - Think of looking in a phone book, you divide and conquer 
    - You only need to explore a subset of each section until you find what you're looking for 
- O(log N) shows up in the green area on our Big-O Complexity Chart 
- An example of this would be think in terms of how Google searches 

## Binary Search Trees 
- The most common data structures is binary search trees, which is a subset of binary tree 
- Binary Search Tree
  - Great for comparing things 
  - This data structure preserves relationships 
    - Example folders and documents on your computer 
- Rules of Binary Search Trees 
  - All child nodes in the tree to the right of the root node must be greater than the current node 
    - The number constantly increases 
  - A node can only have up to two children because it's a binary tree 
- The advantage of a binary search tree is that searching and lookup are super easy 
  - You don't have to iterate in a linear fashion 
- Insert and delete, we have to figure out where to insert or delete the item before we perform that action 
  - The operation seems simple, but a lot of reordering has to happen 
- VisualGo has a visual for binary search trees for us to look at 
- We're always traversing before we insert or delete to figure out where we want to put our item 

## Balanced vs Unbalanced BST 
- We can have an unbalanced tree where it turns into basically a linked list 
- Balanced vs Unbalanced 
  - lookup - O(n)
  - insert - O(n)
  - delete - O(n)
- Ideally we want to balance our search trees
- How do you balance a tree? 
  - There are algorithms that help us do this 
    - We have things like AVL Trees and Red Black Trees 
  - Luckily for us they're built into most tools and libraries 
  - And in interview questions  they won't ask you to balance a binary search tree 
    - The idea is to be able to talk about it and know that there are ways to balance a search tree and be able to talk about the tradeoffs 

## BST Pros and Cons 
- Pros 
  - Better than O(n)
  - Ordered
  - Flexible Size 
- Cons
  - No O(1) operations 
    - We usually have to traverse through the tree 
- Binary search trees aren't the fatest for anything, they perform very well as long as you make sure that you stay away from the edge cases we talked about and balance our binary search tree 

## Exercise: Binary Search Tree
- In the exercise we will write our own 
- Like our linked list it requires to keep track of the nodes to the left and the right 
- We have a root which is the top node 
- We have a small traverse function - ignore this because it has recursion 
- All we need to do to verify our code is working is `JSON.stringify(traverse(tree.root))`
- The look up should return the node we're looking for 

## Solution: insert() 
- You won't necessarily have to code binary search trees from scratch by yourself, but we do want to udnerstand the fundamentals and how things work behind the scenes 

## Solution: lookup() 
- We're only iterating using divide and conquer 
  - Dividing up so we don't visit all the nodes, at each node we make a decision to go left or right 

## Extra Exercise: remove() 
- Bonus exercise, you most likely won't see this in an interview 
- The best way to visualize what steps we need to do, go to VisualGo and slow it down to the slowest speed 
- We find what we want to replace, going to the right and the left 

## Solution: remove() 
- We need a reference to the parent, so if we remove something we can go back 

## AVL Trees + Red Black Trees 
- There are two types of trees we use in production to rebalance our trees 
  - AVL Trees and Red Black Trees

## Resource: AVL Trees + Red Black Trees 
- TODO: Come back to the How It Works Resources and Read Through Those on AVL and Red Black Trees 

## Binary Heaps 
- Heap 
  - When we talk about heaps, we'll most likely be talking about binary heaps 
  - That means that there's only going to be two children to a node 
- Binary Heap 
  - lookup - O(n)
    - It's less ordered than a binary search tree 
  - insert - O(log N)
  - delete - O(log N)
- Max Heap - root node is the largest 
- Min Heap - root node is the smallest 
- A heap can be used in any algorithm where order is important 
- Why would we use a binary heap? 
  - They are really good at doing comparitive operations 
  - Heaps are used a lot in data storage, priority queues and sorting algorithms 
  - Heaps add value on the tree from left to right 

## Quick Note on Heaps 
- Memory Heap != Heap Data Structure 
  - Like the heap in the runtime 
  - Heap is a heap of memory when you're talking about a language runtime 

## Priority Queue 
- Binary Heaps take up the least amount of space possible, we don't have to balance it like we do, they preserve the order of insertion 
  - You could implement using arrays instead of nodes 
- Priority Queue 
  - Regular Queues is FIFO 
  - A Priority Queue where each element has a priority and elements with a higher priority are served before elements with lower priorities 
    - Example: a nightclub with VIP's showing up and get let in first 
    - Example: an emergency room, you treat the patients with the most severe symptoms 
- Binary Heaps 
  - Pros 
    - Better than O(n)
    - Priority 
    - Flexible Size 
    - Fast Insert 
  - Cons 
    - Slow lookup 
      - Use when you have the max or min of a heap 

## Trie 
- Trie 
  - Specialized tree used in searching, most often with text
  - In most cases it can outperform binary search trees, hash tables and most other data structures depending on the type of search you're doing 
  - Has an empty root node 
  - Another name is a prefix tree 
  - This is used for finding words in a dictionary, etc. 
- The benefit of this type of data structure is speed and space 
  - Has O(length of word)
  - Space complexity, we don't have to store letters multiple times 

## Tree Review 
- The way trees work besides some small logic the small variations become easy to pick up 