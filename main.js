// Query selectors:
var scoreboardLeft = document.querySelector("#left-side-wins")
var scoreboardRight = document.querySelector("#right-side-wins")
var promptTurn = document.querySelector("#prompt-user-turn")
var displayWhoseTurn = document.querySelector(".display-symbol")
var buttonContainer = document.querySelectorAll(".grid-container")
var cellButtons = document.querySelectorAll(".cell-button")
var mainPane = document.querySelector("main")
var btn1 = document.querySelector("#btn1")
var btn2 = document.querySelector("#btn2")
var btn3 = document.querySelector("#btn3")
var btn4 = document.querySelector("#btn4")
var btn5 = document.querySelector("#btn5")
var btn6 = document.querySelector("#btn6")
var btn7 = document.querySelector("#btn7")
var btn8 = document.querySelector("#btn8")
var btn9 = document.querySelector("#btn9")

// var ButtonsArray  = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9]
var buttonsObjectArray = [
    {name: "btn1", hasBeenClicked: false,}, {name: "btn2", hasBeenClicked: false}, {name: "btn3", hasBeenClicked: false}, {name: "btn4", hasBeenClicked: false},
    {name: "btn5", hasBeenClicked: false}, {name: "btn6", hasBeenClicked: false}, {name: "btn7", hasBeenClicked: false}, {name: "btn8", hasBeenClicked: false},
    {name: "btn9", hasBeenClicked: false}]

var allTiles = ["btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9"]
var winningCombinations = [["btn1", "btn2", "btn3"], ["btn4", "btn5", "btn6"], ["btn7", "btn8", "btn9"], ["btn1", "btn4", "btn7"], ["btn2", "btn5", "btn8"], ["btn3", "btn6", "btn9"], ["btn1", "btn5", "btn9"], ["btn3", "btn5", "btn7"]]

var players = [ {
    name: "✰",
    history: [],
    isTheirTurn: true,
    id: "player1",
    isWinner: false,
    isDraw: false,
}, {
    name: "☁",
    history: [],
    isTheirTurn: false,
    id: "player2",
    isWinner: false,
    isDraw: false, 
}]

// Event listeners:

mainPane.addEventListener("click", function(event){
    var button = event.target.closest(".cell-button")
    for( var i = 0; i < buttonsObjectArray.length; i++){
        if (button.id === buttonsObjectArray[i].name){
            buttonsObjectArray[i].hasBeenClicked = true
            displayPlayerTurn()
            updateGridSymbol(button)
            addButtonToHistory(button.id)
            checkForWinner()
            reAssignWhoseTurn()
        } else {
        letPlayerRepeatTurn()
        displayPlayerTurn()
        checkForWinner()
    }
}  
})

// button1.addEventListener("click", function(event){
//     updateGridSymbol(button1)
//     addButtonToHistory("btn1")
//     button1.hasBeenClicked = true
// })

// button2.addEventListener("click", function(event){
//     updateGridSymbol(button2)
//     addButtonToHistory("btn2")
//     button2.hasBeenClicked = true
//     })

// button3.addEventListener("click", function(event){
//     updateGridSymbol(button3)
//     addButtonToHistory("btn3")
//     button3.hasBeenClicked = true
//     })

// button4.addEventListener("click", function(event){
//     updateGridSymbol(button4)
//     addButtonToHistory("btn4")
//     button4.hasBeenClicked = true
//     })

// button5.addEventListener("click", function(event){
//     updateGridSymbol(button5)
//     addButtonToHistory("btn5")
//     button5.hasBeenClicked = true
//     })

// button6.addEventListener("click", function(event){
//     updateGridSymbol(button6)
//     addButtonToHistory("btn6")
//     button6.hasBeenClicked = true
//     })

// button7.addEventListener("click", function(event){
//     updateGridSymbol(button7)
//     addButtonToHistory("btn7")
//     button7.hasBeenClicked = true
//     })

// button8.addEventListener("click", function(event){
//     updateGridSymbol(button8)
//     addButtonToHistory("btn8")
//     button8.hasBeenClicked = true
//     })

// button9.addEventListener("click", function(event){
//     updateGridSymbol(button9)
//     addButtonToHistory("btn9")
//     button9.hasBeenClicked = true
//     })

function updateGridSymbol(buttonName){
        if (buttonName.innerText === ""){
            if(players[0].isTheirTurn === true){
                return buttonName.innerText = players[0].name
             } else {return buttonName.innerText = players[1].name}
        }
        if (buttonName.innerText.length > 0){
            letPlayerRepeatTurn()
            keepHeadingTheSame()
        }
    }


function addButtonToHistory(specificButton){
    var buttonName = specificButton
    if (players[0].isTheirTurn === true){
        players[0].history.push(buttonName)
    } else {
        players[1].history.push(buttonName)
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

function letPlayerRepeatTurn(){
    if(players[0].isTheirTurn === true){
        players[1].isTheirTurn = false
        players[0].isTheirTurn = true
    } else {
        players[1].isTheirTurn = true
        players[0].isTheirTurn = false
    }
}

function displayPlayerTurn(){
    if(players[0].isTheirTurn === true){
        displayWhoseTurn.innerText = players[0].name
    } else {
        displayWhoseTurn.innerText = players[1].name
    }
}
function checkForWinner(){
    var p1Moves = players[0].history
    var p2Moves = players[1].history
    for (var i = 0; i < winningCombinations.length; i++){
        if (p1Moves.includes(winningCombinations[i][0]) && p1Moves.includes(winningCombinations[i][1]) && p1Moves.includes(winningCombinations[i][2])){
            return players[0].isWinner = true
        }
        if (p2Moves.includes(winningCombinations[i][0]) && p2Moves.includes(winningCombinations[i][1]) && p2Moves.includes(winningCombinations[i][2])){
            return players[1].isWinner = true
        }
    } 
    if (p1Moves.length === 5 || p2Moves.length === 5){
        players[0].isDraw = true
        players[1].isDraw = true  
    }
}


