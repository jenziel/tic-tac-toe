// DOM Variables:
var player1Wins = document.querySelector("#left-side-wins");
var player2Wins = document.querySelector("#right-side-wins");
var mainMessage = document.querySelector(".main-title");
var buttonContainer = document.querySelector(".grid-container");
var cellButtons = document.querySelectorAll(".cell-button");
var mainPane = document.querySelector("main");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var btn5 = document.querySelector("#btn5");
var btn6 = document.querySelector("#btn6");
var btn7 = document.querySelector("#btn7");
var btn8 = document.querySelector("#btn8");
var btn9 = document.querySelector("#btn9");



var buttonsObjectArray = [
  { name: "btn1", hasBeenClicked: false },
  { name: "btn2", hasBeenClicked: false },
  { name: "btn3", hasBeenClicked: false },
  { name: "btn4", hasBeenClicked: false },
  { name: "btn5", hasBeenClicked: false },
  { name: "btn6", hasBeenClicked: false },
  { name: "btn7", hasBeenClicked: false },
  { name: "btn8", hasBeenClicked: false },
  { name: "btn9", hasBeenClicked: false },
];

var winningCombinations = [
  ["btn1", "btn2", "btn3"],
  ["btn4", "btn5", "btn6"],
  ["btn7", "btn8", "btn9"],
  ["btn1", "btn4", "btn7"],
  ["btn2", "btn5", "btn8"],
  ["btn3", "btn6", "btn9"],
  ["btn1", "btn5", "btn9"],
  ["btn3", "btn5", "btn7"],
];

var players = [
  {
    name: "✰",
    history: [],
    isTheirTurn: true,
    isWinner: false,
    isDraw: false,
    numWins: 0,
    goesFirst: true,
  },
  {
    name: "☁",
    history: [],
    isTheirTurn: false,
    isWinner: false,
    isDraw: false,
    numWins: 0,
    goesFirst: false,
  },
];

// Event listeners:

mainPane.addEventListener("click", function (event) {
  var button = event.target.closest(".cell-button");
  for (var i = 0; i < buttonsObjectArray.length; i++) {
    if (
      button.innerText.length === 0 &&
      button.id === buttonsObjectArray[i].name
    ) {
      buttonsObjectArray[i].hasBeenClicked = true;
      addButtonToHistory(buttonsObjectArray[i].name)
      updateGridSymbol(button)
      checkForWinner();// separate into one helper function
      if (
        players[0].isWinner === false &&
        players[1].isWinner === false &&
        players[0].isDraw === false
      ) {
        reAssignWhoseTurn();
        displayWhoseTurn();
      } else {
        displayWinnerHelper();
        resetTheGame();
      }
    } else {
      letPlayerRepeatTurn();
    }
  }
});

function updateGridSymbol(buttonName) {
  if (buttonName.innerText === "") {
    for (var i = 0; i < players.length; i++) {
      if (players[i].isTheirTurn === true) {
        buttonName.innerText = players[i].name;
      }
    }
    if (buttonName.innerText.length > 0) {
      return letPlayerRepeatTurn();
    }
  }
}

function addButtonToHistory(buttonName) {
  for (var i = 0; i < players.length; i++) {
    if (players[i].isTheirTurn === true) {
      players[i].history.push(buttonName);
    }
  }
}

function reAssignWhoseTurn() {
  for (let i = 0; i < players.length; i++) {
    players[i].isTheirTurn = !players[i].isTheirTurn;
  }
}

function letPlayerRepeatTurn() {
  for (var i = 0; i < players.length; i++) {
    if (players[i].isTheirTurn === true) {
      players[i].isTheirTurn = true;
    }
  }
}

function displayWhoseTurn() {
  for (var i = 0; i < players.length; i++) {
    if (players[i].isTheirTurn === true) {
      mainMessage.innerText = `It's ${players[i].name}'s turn`;
    }
  }
}

function showGameResults() {
  for (var i = 0; i < players.length; i++) {
    if (players[i].isWinner === true) {
        mainMessage.innerText = `${players[i].name} wins!`;
    }
    if (players[i].isDraw === true) {
        mainMessage.innerText = "It's A Draw!";
    }
  }
}

function checkForWinner() {
  var p1Moves = players[0].history;
  var p2Moves = players[1].history;
  for (var i = 0; i < winningCombinations.length; i++) {
    if (
      p1Moves.includes(winningCombinations[i][0]) &&
      p1Moves.includes(winningCombinations[i][1]) &&
      p1Moves.includes(winningCombinations[i][2])
    ) {
      return (players[0].isWinner = true);
    }
    if (
      p2Moves.includes(winningCombinations[i][0]) &&
      p2Moves.includes(winningCombinations[i][1]) &&
      p2Moves.includes(winningCombinations[i][2])
    ) {
      return (players[1].isWinner = true);
    }
  }
  if (p1Moves.length + p2Moves.length === 9) {
    players[0].isDraw = true;
    players[1].isDraw = true;
  }
}

function updateScoreBoard() {
  if (
    players[0].isWinner === false &&
    players[1].isWinner === false &&
    players[0].isDraw === false
  ) {
    reAssignWhoseTurn();
  } else {
    for (var i = 0; i < players.length; i++) {
      if (players[i].isWinner === true) {
        players[i].numWins += 1;
        player1Wins.innerText = players[0].numWins;
        player2Wins.innerText = players[1].numWins;
      }
    }
  }
}

function displayWinnerHelper() {
  checkForWinner();
  for (var i = 0; i < players.length; i++) {
    if (players[i].isWinner === true || players[i].isDraw === true) {
      updateScoreBoard();
      showGameResults();
    }
  }
}

function resetTheGame() {
  if (players[0].isWinner || players[1].isWinner || players[0].isDraw) {
    setTimeout(function () {
      clearGameHistory();
      alternateWhoStartsGame();
      resetBoard();
      resetCardData();
    }, 5000);
  }
}

function reAssignWhoGoesFirst() {
  for (var i = 0; i < players.length; i++) {
    players[i].goesFirst = !players[i].goesFirst;
  }
}

function resetBoard() {
  for (var i = 0; i < players.length; i++) {
    if (players[i].isTheirTurn === true) {
      mainMessage.innerText = `It's ${players[i].name}'s turn`;
    }
  }
  for (var i = 0; i < buttonsObjectArray.length; i++){
    var resetThisElement = buttonsObjectArray[i].name
    result = eval(resetThisElement)
    result.innerText = ""
  }

}

function clearGameHistory() {
  for (var i = 0; i < players.length; i++) {
    players[i].history = [];
    players[i].isWinner = false;
    players[i].isDraw = false;
    players[i].isTheirTurn = false;
    players[i].goesFirst = !players[i].goesFirst;
  }
}

function alternateWhoStartsGame() {
  for (var i = 0; i < players.length; i++) {
    if (players[i].goesFirst === true) {
      players[i].isTheirTurn = true;
    }
  }
}

function resetCardData() {
  for (var i = 0; i < buttonsObjectArray.length; i++) {
    buttonsObjectArray[i].hasBeenClicked = false;
  }
}