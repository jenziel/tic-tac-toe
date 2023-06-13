## Abstract:  
The final project for Module 1 in the FrontEnd Program at Turing is to build a fully-functional tic-tac-toe game. 
Our instructors took the training wheels off and did not provide a global variable organization system or any specific iteration instructions to guide our workflow. 
The link to the Tic Tac Toe project spec is linked [here.](https://frontend.turing.edu/projects/module-1/tic-tac-toe-solo-v2.html)
### Installation Instructions:
- Git clone this repo to your local machine
- Cd into that directory
- Enter the command open index.html to open the browser

### Preview of App:
![Screenshot 2023-06-13 at 7 18 22 PM](https://user-images.githubusercontent.com/130857864/245631157-5f6472fa-cb55-458c-a16e-595c865b6b4d.png)
![Screenshot 2023-06-13 at 7 18 29 PM](https://user-images.githubusercontent.com/130857864/245631155-17865492-979f-4005-9634-183cfae60a57.png)


### Context:
- I spent 25 hours working on this project.  I am in my 6th week of Module 1 at Turing.

### Contributors:  

Just me, Jen Ziel.  https://github.com/jenziel

### Learning Goals:  
1. Solidify and demonstrate your understanding of DRY JavaScript and event delegation to handle similar event listeners
2. Understand the difference between the data model and how the data is displayed on the DOM.  
3. Iterate through/filter DOM elements using for loops. 
4. Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside “answer” to a logical challenge

### Wins + Challenges:  

### Wins: 
-  I'm happy to report that I achieved functionality! :-)
### Challenges:
- I got stuck for a long time over the weekend when it came to debugging some innerText that wasn't updating after the first game. It took some time to figure out, but eventually I found the source of the bug was coming from injecting HTML to replace the orginal elements that had querySelectors on page-load.    
- Another challenge was organizing my global variables in a logical way.  I found myself storing game data within the players objects as a shorthand for updating all of the game data.  I need to study how to use nested objects as a data model further.  