// Query selectors:
var scoreboardLeft = document.querySelector("#left-side-wins")
var scoreboardRight = document.querySelector("#right-side-wins")
var promptTurn = document.querySelector("#prompt-user-turn")
var displaySymbol = document.querySelector(".display-symbol")
var buttonContainer = document.querySelectorAll(".grid-container")
var cellButtons = document.querySelectorAll(".cell-button")
var mainPane = document.querySelector("main")
var button1 = document.querySelector("#btn1")
var button2 = document.querySelector("#btn2")
var button3 = document.querySelector("#btn3")
var button4 = document.querySelector("#btn4")
var button5 = document.querySelector("#btn5")
var button6 = document.querySelector("#btn6")
var button7 = document.querySelector("#btn7")
var button8 = document.querySelector("#btn8")
var button9 = document.querySelector("#btn9")

var buttonsArray = [button1, button2, button3, button4, button5, button6, button7, button8, button9]
// Event listeners:
// window.addEventListener("load", showBlankBoard)

mainPane.addEventListener("click", function(){
    switchPlayer()
    displayPlayerTurn()
})

button1.addEventListener("click", function(event){
    if(promptTurn.classList.contains("player-1-active")){
        button1.innerText = "✰"
    } else {button1.innerText = "☁"}
})

button2.addEventListener("click", function(event){
    if(promptTurn.classList.contains("player-1-active")){
        button2.innerText = "✰"
    } else {button2.innerText = "☁"}
})

button3.addEventListener("click", function(event){
    if(promptTurn.classList.contains("player-1-active")){
        button3.innerText = "✰"
    } else {button3.innerText = "☁"}
})

button4.addEventListener("click", function(event){
    if(promptTurn.classList.contains("player-1-active")){
    button4.innerText = "✰"
} else {button4.innerText = "☁"}
})

button5.addEventListener("click", function(event){
    if(promptTurn.classList.contains("player-1-active")){
        button5.innerText = "✰"
    } else {button5.innerText = "☁"}
    
})
button6.addEventListener("click", function(event){
    if(promptTurn.classList.contains("player-1-active")){
        button6.innerText = "✰"
    } else {button6.innerText = "☁"} 
})
button7.addEventListener("click", function(event){
    if(promptTurn.classList.contains("player-1-active")){
        button7.innerText = "✰"
    } else {button7.innerText = "☁"} 
})
button8.addEventListener("click", function(event){
    if(promptTurn.classList.contains("player-1-active")){
        button8.innerText = "✰"
    } else {button8.innerText = "☁"} 
})
button9.addEventListener("click", function(event){
    if(promptTurn.classList.contains("player-1-active")){
        button9.innerText = "✰"
    } else {button9.innerText = "☁"} 
})
function switchPlayer(){
    if (promptTurn.classList.contains("player-1-active")){
        promptTurn.classList.add("player-2-active")
        promptTurn.classList.remove("player-1-active")
    } else if (promptTurn.classList.contains("player-2-active")){
        promptTurn.classList.add("player-1-active")
        promptTurn.classList.remove("player-2-active")
    }
}
function displayPlayerTurn(){
    if(promptTurn.classList.contains("player-1-active")){
        displaySymbol.innerText = "✰"
    } else {
        displaySymbol.innerText = "☁"
    }
}

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