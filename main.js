// Query selectors:
var scoreboardLeft = document.querySelector("#left-side-wins")
var scoreboardRight = document.querySelector("#right-side-wins")
var promptTurn = document.querySelector("#prompt-user-turn")
var displayWhoseTurn = document.querySelector(".display-symbol")
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
var allTiles = ["btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9"]
var winningCombinations = [["btn1", "btn2", "btn3"], ["btn4", "btn5", "btn6"], ["btn7", "btn8", "btn9"], ["btn 1", "btn4", "btn7"], ["btn2", "btn5", "btn8"], ["btn3", "btn6", "btn9"], ["btn1", "btn5", "btn9"], ["btn3", "btn5", "btn7"]]

var players = [ {
    name: "✰",
    tilesSelected: [],
    isTheirTurn: true,
    id: "player1",
}, {
    name: "☁",
    tilesSelected: [],
    isTheirTurn: false,
    id: "player2",
}]
// Event listeners:

mainPane.addEventListener("click", function(){
    reAssignWhoseTurn()
    switchHeading()
    displayPlayerTurn()
})

button1.addEventListener("click", function(event){
    updateGridSymbol(button1)
    addButtonToHistory("btn1")
})

button2.addEventListener("click", function(event){
    updateGridSymbol(button2)
    addButtonToHistory("btn2")
    })

button3.addEventListener("click", function(event){
    updateGridSymbol(button3)
    addButtonToHistory("btn3")
    })

button4.addEventListener("click", function(event){
    updateGridSymbol(button4)
    addButtonToHistory("btn4")
    })

button5.addEventListener("click", function(event){
    updateGridSymbol(button5)
    addButtonToHistory("btn5")
    })

button6.addEventListener("click", function(event){
    updateGridSymbol(button6)
    addButtonToHistory("btn6")
    })

button7.addEventListener("click", function(event){
    updateGridSymbol(button7)
    addButtonToHistory("btn7")
    })

button8.addEventListener("click", function(event){
    updateGridSymbol(button8)
    addButtonToHistory("btn8")
    })

button9.addEventListener("click", function(event){
    updateGridSymbol(button9)
    addButtonToHistory("btn9")
    })

function updateGridSymbol(buttonName){
        if(players[0].isTheirTurn === true){
           buttonName.innerText = [players[0].name]
        } else {buttonName.innerText = [players[1].name]}
    }


function addButtonToHistory(specificButton){
    var buttonName = specificButton
    if (players[0].isTheirTurn === true){
        players[0].tilesSelected.push(buttonName)
    } else {
        players[1].tilesSelected.push(buttonName)
    }
}


function reAssignWhoseTurn(){
    if (players[0].isTheirTurn === true){
        players[1].isTheirTurn = true 
        players[0].isTheirTurn = false
    } else {
        players[0].isTheirTurn = true
        players[1].isTheirTurn = false
    }
}

function switchHeading(){
    if (players[0].isTheirTurn === true){
        promptTurn.classList.add(`${players[0].id}-active`)
        promptTurn.classList.remove(`${players[1].id}-active`)
    } else {
        promptTurn.classList.add(`${players[1].id}-active`)
        promptTurn.classList.remove(`${players[0].id}-active`)

    }
}

function displayPlayerTurn(){
    if(players[0].isTheirTurn === true){
        displayWhoseTurn.innerText = [players[0].name]
    } else {
        displayWhoseTurn.innerText = [players[1].name]
    }
}
function checkForWinner(){
    if players[0].history.includes(["btn1", "btn2", "btn3"],)
}