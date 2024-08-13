# Section 4: How To Solve Coding Problems 

## Section Overview
- Interview - How To Solve Problems 
  - The question you are trying to answer is, will you solve the companies problem? 
  - You want to be able to communicate your thought process and how to communicate trade offs 
  - It's not about memorizing data structures and algorithms, it's about really knowing them 

## What Are Companies Looking For?
- What are companies looking for? 
  - Analytic skills
    - How can you think through a problem and analyze things? 
  - Coding skills
    - Do you code well, is it readable? 
  - Technical skills 
    - Do you know the fundamentals? Do you understand the pros and cons of different solutions or did you just memorize things? 
  - Communication skills
    - Does your personality match with the company and/or team? 
- They're looking for people who know how to look for answers 
  - They want to know you know your data structures and when to use one over the other 
- As we go forward practice learning the WHY

## What We Need For Coding Interviews
- The most used Data Structures and Algorithms  
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
- Most of the time you don't use these in a job, but companies want people who are going to work hard for an interview 
- We will use the cheatsheet on how to solve problems 

## Exercise: Google Interview 
- Use the cheatsheet as you watch the Example Coding/ Engineering Video from Google 
  - Watch the video and see how it follows the 15 step by step instructions to solving a problem in the cheatsheet 

## Exercise: Interview Question 
- Step 1 - Write the example out if it's not already and write out inputs
- Step 2 - Clarify your parameters and outputs
- Step 3 - Think of the clarifying questions
  - -Given this is a smaller problem it may be hard to find questions to ask, but there are still some that you can ask
  - Is time or space complexity more important?
- Step 4 - remember that you have a time limit, so keep time in mind 
- Step 5 
  - Start with the first solution that comes to mind, you don't have to even write this code out, you need to say it out loud 
  - You can say this looks like a nested loop because we are comparing two different arrays 
    - This is not an efficient solution, but shows you are thinking through the problem 
- Step 6 
  - Tell them the Big O 
  - Code isn't redable or time efficient 
  - You may not have time to code out the brute force solution, but because we know nested for loops have a Big O of O(n^2) we know this isn't an efficient solution
- Step 7 
  - The most common pattern when you need to use a nested for loop, so we know that we can use a hash table 
- Step 8 
  - Write out how you are going to approach the problem 

## Exercise: Interview Question 2
- Step 9
  - As code becomes more and more complex it's important to modularize and break your code down into small bits and pieces 
  - Long really hard pieces of codes cost companies money 
    - Code needs to be easy to pick up and code along with 
  - You don't really have to do this is an interview, but it is important to talk about how you would go about this 
- Step 10 
  - Now that we have a plan and we've commented out our steps, we're ready to begin coding 
- Step 11 
  - Always look out for how you can break your code 
  - You also want to be able to explain how errors may arise 
  - Can we always assume two parameters 
  - Start thinking about how you may break this function and how you would add in checks 
- Step 12 
  - Don't use variables like i and j, unless it's in a for loop 
  - Naming your parameters maybe if the data is more specific 
  - It's just to let the interviewer know you're thinking about these things 
- Step 13 
  - Thinking about this function and how you would test this function 
- Step 14 
  - Looking at our second solution, we're using an object in JavaScript might not work if we're using non-literal values 
  - We can argue our code could be more readable 
    - This is something that is language specific 
    - Are there built in methods using JavaScript that may make this more important 
- Step 15 
  - We were focused in our solution on time complexity and not space complexity, so we have to look at how much space our solution is taking up memory 

## Review Google Interview 
- TODO: Come up with my own solution for the google interview problem using language of choice
  - https://replit.com/@aneagoie/interview

## Optional Exercise: Google Interview On Your Own 
- Note on the above video 

## Section Summary 
- We talked about technical interviews and how to solve problems 
- The key in the section is the cheatsheet and then the walkthrough of the problem 
- Communicating throughout the process as much as possible is key 
  - Memorizing problems isn't the answer, we want to know our fundamentals 
- Usually the way to make our solution better can be narrowed down to specific steps 
  - We have an easy clear checklist in our cheatsheet that we will use throughout the rest of the sections 