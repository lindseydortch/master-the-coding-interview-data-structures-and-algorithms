# Section 11: Data Structures: Graphs 

## Graphs Introduction 
- Graphs are one of the most useful and most used data structures in computer science when it comes to modeling real life 
- Graph - a set of values that are related in a pairwise fashion 
  - In a graph each item is called a node or a vertex 
  - Nodes are then connected with edges 
- Graphs are great data structures to model real world relationships representing links 
- Graphs are ideal for cases where you're working with things that connect to other things 
- Companies that use graphs 
  - Facebook uses it for their social network 
  - Amazon uses it for their recommendation engines 
  - Google Maps uses graphs for determining the shortest route 

## Types Of Graphs 
- Directed 
  - These typees of graphs are useful for describing traffic flow for some kind of system in which movement is not bi-drectional 
- Undirected 
  - One-way street 
- Weighted 
  - You have information on the edges 
  - Great for Google maps mapping paths 
- Unweighted 
  - There is no infromation on the edges 
- Cyclic 
  - Verteces connected in a circular fashion 
- Acyclic 
  - You can't get back to the beginning 
- Opti Project shows a partial map of the internet 

## Exercise: Guess The Graph 
- VisualGo has visuals for the different types of graphs 
- Directed Acyclic Graph - common in DAG 
  - Used in blockchains 

## Graph Data 
- Graphs when you look at them can be intimidating, but graphs are built on top of other data structures 
  - We can use trees and linked lists 
- Three ways of thinking about building a graph 
  - Edge list - simply shows the connection 
  - Adjacent List - we can create a graph where the index is the node and the value is the nodes neighbors 
  - Adjacent Matrix - going to have 0 or 1's indicating whether the Node X has a connection to Node Y 

## Exercise: Graph Implementation 
- Introduction to implenting the graph data structure 

## Solution: Graph Implementation
- Graphs look intimidating at first, once you draw things out they are really simple
- Graphs use hash tables and other data structures that we've implemented so far 
- We used an object, but we could create this with a linked list 
- When it comes to interviews
  - Not as big of a topic as other data structures mostly because they take a bit of time to implement and questions regarding graphs can be overly complex 

## Graphs Review 
- Pros 
  - Relationships 
- Cons 
  - Scaling is hard 
- Graphs are indispensable because some data just needs to be in a graph form, there's just no other way around it 
  - There are algorithms around graphs such as the ones that we're going to be talking about in the algorithm section that allow us to perform operations such as finding the shortest path or traversing a graph 
- You need a big company to make sure you build big graph structures that scale well 
  - Lucky for us you won't have to build your own graph in production 

## Data Structures Review 
- We've learned that data structures are our friends 
- Technology is all built using data structures 
- We hold information in data structures no matter how many data structures they are and there will be in the future, most of the building blocks are here 
- Blockchain is just data structures that we've learned about 

## What Else Is Coming Up? 
- We've completed going through the data structures and now we're going to be going through algorithms which are the last piece of the puzzle 
- There are some things that were left out because we need algorithms to solve these problems 
  - Sorting - we're going to use arrays and trees 
  - Dynamic Programming - hash tables 
  - Breadth First Search and Depth First Search (Searching) - used in graphs and trees
  - Recursion - comes up a lot in trees as well 
- Now that we understand how data structures work, we're able to talk about algorithms intelligently and understand them at a fundamental level 