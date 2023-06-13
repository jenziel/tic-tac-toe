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

// Global Variables:

var gameBoardBtns = [
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

var winningCombos = [
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
    id: "✰",
    history: [],
    isTheirTurn: true,
    isWinner: false,
    isDraw: false,
    numWins: 0,
    goesFirst: true,
  },
  {
    id: "☁",
    history: [],
    isTheirTurn: false,
    isWinner: false,
    isDraw: false,
    numWins: 0,
    goesFirst: false,
  },
];

// Event Listeners:

mainPane.addEventListener("click", function (event) {
  var button = event.target.closest(".cell-button");
  for (var i = 0; i < gameBoardBtns.length; i++) {
    if (button.innerText.length === 0 && button.id === gameBoardBtns[i].name) {
      gameBoardBtns[i].hasBeenClicked = true;
      addButtonToHistory(button.id);
      updateGridSymbol(button);
      detectGameResult();
      determineIfGameContinues();
    } else {
      letPlayerRepeatTurn();
    }
  }
});

function determineIfGameContinues() {
  if (
    players[0].isWinner === false &&
    players[1].isWinner === false &&
    players[0].isDraw === false
  ) {
    reassignWhoseTurn();
    displayWhoseTurn();
  } else {
    resolveCompletedGame();
    resetTheGame();
  }
}

function updateGridSymbol(buttonName) {
  if (buttonName.innerText === "") {
    for (var i = 0; i < players.length; i++) {
      if (players[i].isTheirTurn === true) {
        buttonName.innerText = players[i].id;
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

function reassignWhoseTurn() {
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
      mainMessage.innerText = `It's ${players[i].id}'s turn`;
    }
  }
}

function showGameResults() {
  for (var i = 0; i < players.length; i++) {
    if (players[i].isWinner === true) {
      mainMessage.innerText = `${players[i].id} wins!`;
    }
    if (players[i].isDraw === true) {
      mainMessage.innerText = "It's A Draw!";
    }
  }
}

function detectGameResult() {
  detectWinner();
  detectDraw();
}

function detectWinner() {
  for (var i = 0; i < winningCombos.length; i++) {
    if (
      players[0].history.includes(winningCombos[i][0]) &&
      players[0].history.includes(winningCombos[i][1]) &&
      players[0].history.includes(winningCombos[i][2])
    ) {
      return (players[0].isWinner = true);
    }
    if (
      players[1].history.includes(winningCombos[i][0]) &&
      players[1].history.includes(winningCombos[i][1]) &&
      players[1].history.includes(winningCombos[i][2])
    ) {
      return (players[1].isWinner = true);
    }
  }
}

function detectDraw() {
  if (
    players[0].history.length + players[1].history.length === 9 &&
    players[0].isWinner === false &&
    players[1].isWinner === false
  ) {
    players[0].isDraw = true;
    players[1].isDraw = true;
  }
}

function updateWins() {
  for (var i = 0; i < players.length; i++) {
    if (players[i].isWinner === true) {
      players[i].numWins += 1;
    }
  }
}

function updateScoreBoard() {
  for (var i = 0; i < players.length; i++) {
    if (players[i].isWinner === true) {
      player1Wins.innerText = players[0].numWins;
      player2Wins.innerText = players[1].numWins;
    }
  }
}

function resolveCompletedGame() {
  for (var i = 0; i < players.length; i++) {
    if (players[i].isWinner === true || players[i].isDraw === true) {
      updateWins();
      updateScoreBoard();
      showGameResults();
      disableTicTacToeBoard();
    }
  }
}

function resetTheGame() {
  setTimeout(function () {
    clearGameHistory();
    alternateWhoStartsGame();
    resetBoard();
    resetCardData();
    enableTicTacToeBoard();
  }, 5000);
}

function reAssignWhoGoesFirst() {
  for (var i = 0; i < players.length; i++) {
    players[i].goesFirst = !players[i].goesFirst;
  }
}

function resetBoard() {
  for (var i = 0; i < players.length; i++) {
    if (players[i].isTheirTurn === true) {
      mainMessage.innerText = `It's ${players[i].id}'s turn`;
    }
  }
  for (var i = 0; i < gameBoardBtns.length; i++) {
    var resetThisElement = gameBoardBtns[i].name;
    result = eval(resetThisElement);
    result.innerText = "";
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
  for (var i = 0; i < gameBoardBtns.length; i++) {
    gameBoardBtns[i].hasBeenClicked = false;
  }
}

function disableTicTacToeBoard() {
  for (var i = 0; i < cellButtons.length; i++) {
    if (cellButtons[i].innerText === "") {
      cellButtons[i].disabled = true;
    }
  }
}
function enableTicTacToeBoard() {
  for (var i = 0; i < cellButtons.length; i++) {
    cellButtons[i].disabled = false;
  }
}
