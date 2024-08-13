## Question 
- Given a collection of numbers and find the matching pair that is equal to a sum that is given as well 
  - Examples: 
    - [1, 2, 3, 9] - Sum = 8
    - [1, 2, 4, 4] - Sum = 8

## Step By Step through a problem:
1. When the interviewer says the question, write down the key points at the top (i.e. sorted array). Make sure you have all the details. Show how organized you are.
  - Writes no and yes next to the example 
  - Asking all the questions about repeating elements 
2. Make sure you double check: What are the inputs? What are the outputs?
  - Asked about the type, so can numbers be positive, negative, are all of the outputs integers? 
3. What is the most important value of the problem? Do you have time, and space and memory,
etc.. What is the main goal?
  - Asked about memory 
4. Don't be annoying and ask too many questions.
  - Asks enough questions to get a thorough understanding of the question 
5. Start with the naive/brute force approach. First thing that comes into mind. It shows that you’re able to think well and critically (you don't need to write this code, just speak about it).
  - Gives the solution of nested loops, the initial reaction and says that it's not very time efficient 
6. Tell them why this approach is not the best (i.e. O(n^2) or higher, not readable, etc...)
  - Gave an example of how the brute force solution is not efficient
7. Walk through your approach, comment things and see where you may be able to break things. Any repetition, bottlenecks like O(N^2), or unnecessary work? Did you use all the information the interviewer gave you? Bottleneck is the part of the code with the biggest Big O. Focus on that. Sometimes this occurs with repeated work as well.
  - Walks through the different algorithms he could go with 
  - Really used his interviewer to help him think of other ways to approach the problem 
8. Before you start coding, walk through your code and write down the steps you are going to follow.
  - Walked through how to get to the solution with the example given 
  - Then gives all the time and space complexity 
9.  Modularize your code from the very beginning. Break up your code into beautiful small pieces and add just comments if you need to.
  - Not sure where he wrote this out before actually writing his code 
10.   Start actually writing your code now. Keep in mind that the more you prepare and understand what you need to code, the better the whiteboard will go. So never start a whiteboard interview not being sure of how things are going to work out. That is a recipe for disaster. Keep in mind: A lot of interviews ask questions that you won’t be able to fully answer on time. So think: What can I show in order to show that I can do this and I am better than other coders. Break things up in Functions (if you can’t remember a method, just make up a function and you will at least have it there. Write something, and start with the easy part).
  - Writes out the parameters for his function based on the examples and continues to ask questions 
11.   Think about error checks and how you can break this code. Never make assumptions about the input. Assume people are trying to break your code and that Darth Vader is using your function. How will you safeguard it? Always check for false inputs that you don’t want. Here is a trick: Comment in the code, the checks that you want to do... write the function, then tell the interviewer that you would write tests now to make your function fail (but you won't need to actually write the tests).
  - Goes back and really tries to clean up his code 
12.   Don’t use bad/confusing names like i and j. Write code that reads well.
  - Uses really good function names and variables 
13.  Test your code: Check for no params, 0, undefined, null, massive arrays, async code, etc... Ask the interviewer if we can make assumption about the code. Can you make the answer return an error? Poke holes into your solution. Are you repeating yourself?
  - Tests his first solution 
14. Finally talk to the interviewer where you would improve the code. Does it work? Are there different approaches? Is it readable? What would you google to improve? How can performance be improved? Possibly: Ask the interviewer what was the most interesting solution you have seen to this problem
  - He finishes his solution and the interview provides feedback and then has him think about his solution in another way 
15. If your interviewer is happy with the solution, the interview usually ends here. It is also common that the interviewer asks you extension questions, such as how you would handle the problem if the whole input is too large to fit into memory, or if the input arrives as a stream. This is a common follow-up question at Google, where they care a lot about scale. The answer is usually a divide-and-conquer approach — perform distributed processing of the data and only read certain chunks of the input from disk into memory, write the output back to disk and combine them later.
  - The interview added in other ways to think about it, by making him assume his data is not sorted and he was able to quickly bounce into another solution and complain the space and time complexity 
  - Even if he doesn't know a language method of the top of his head, he really takes his time to explain what the method he's looking for is trying to do 
  - He also does a really good job walking through the outputs of what his function is doing 
  - The interviewer asks him to think about larger outputs and he's able to ask more questions based on this and then still walk through his solution 
  - He's also really able to look at his code and say where his solution could improve 

Interview Recap from Interviewer: 
- He asked for clarification on the problem 
- He thought out loud, it's the best thing you can do in an interview 
  - Gives the interviewee the opportunity to see your thought process and course correct you or ask you more questions to see all your knowledge 
- He thought through everything before writing everything down 
- He tested it in real time 
- He thought about edge cases 