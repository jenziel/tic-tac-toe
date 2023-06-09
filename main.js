// Query selectors:
var scoreboardLeft = document.querySelector("#left-side-wins")
var scoreboardRight = document.querySelector("#right-side-wins")
var promptTurn = document.querySelector("#prompt-user-turn")
var gridBox1 = document.querySelector("#1")
var gridBox2 = document.querySelector("#2")
var gridBox3 = document.querySelector("#3")
var gridBox4 = document.querySelector("#4")
var gridBox5 = document.querySelector("#5")
var gridBox6 = document.querySelector("#6")
var gridBox7 = document.querySelector("#7")
var gridBox8 = document.querySelector("#8")
var gridBox9 = document.querySelector("#9")

// Event listeners:
window.addEventListener("load", showBlankBoard)


// Function(s) to display the game board and user data:

function showBlankBoard(){
    
}
//A function that creates the objects that store each players’ informations - properties should include: id (ex: 'one'), token (ex: '⭐️'), wins (ex: 0)
// A function called increaseWins - increases the count of a player’s wins (should work for either player)
// A function that keeps track of the data for the game board
// A function that keeps track of which player’s turn it currently is
// A function that checks the game board data for win conditions
// A function that detects when a game is a draw (no one has won)
// A function that resets the game board’s data to begin a new game