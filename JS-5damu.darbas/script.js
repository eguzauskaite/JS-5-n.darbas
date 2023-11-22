// Instrukcijos
// Taškų skaičiavimo žaidimas: https://www.loom.com/share/c99b8b2d113648909db6295e1b18e35f

// Papildomai: stilizuoti skaičiavimo žaidimą.

// P.s. input turinys per input.value surandamas 
var scoreDisplay = document.getElementById("score");
var winningScoreDisplay = document.getElementById("winningScore");
var incrementButton = document.getElementById("increment");
var decrementButton = document.getElementById("decrement");
var playerOneButton = document.getElementById("one");
var playerTwoButton = document.getElementById("two");
var resetButton = document.getElementById("reset");

let playerOneScore = 0;
let playerTwoScore = 0;
let winningScore = 10;

function updateScores() {
    scoreDisplay.textContent = `${playerOneScore} to ${playerTwoScore}`;
    checkScoreColor();
}
function checkScoreColor() {
    if (playerOneScore >= winningScore || playerTwoScore >= winningScore) {
        scoreDisplay.style.color = playerOneScore >= winningScore ? 'green' : 'red';
    } else {
        scoreDisplay.style.color = 'black';
    }
}

function checkWinner() {
    if (playerOneScore >= winningScore || playerTwoScore >= winningScore) {
        alert(`Player ${playerOneScore >= winningScore ? 'One' : 'Two'} wins!`);
        resetGame();
    }
}

function resetGame() {
    playerOneScore = 0;
    playerTwoScore = 0;
    updateScores();
}

incrementButton.addEventListener("click", () => {
    winningScore = parseInt(prompt("Write new game winning number:")) || winningScore;
    winningScoreDisplay.textContent = winningScore;
    checkScoreColor();
});

decrementButton.addEventListener("click", () => {
    if (winningScore > 1) {
        winningScore--;
        winningScoreDisplay.textContent = winningScore;
        checkScoreColor();
    }
});

playerOneButton.addEventListener("click", () => {
    playerOneScore++;
    updateScores();
    checkWinner();
});

playerTwoButton.addEventListener("click", () => {
    playerTwoScore++;
    updateScores();
    checkWinner();
});

resetButton.addEventListener("click", resetGame);


