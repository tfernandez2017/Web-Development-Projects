var player1 = document.querySelector("#p1");
var player2 = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var play1Display = document.querySelector("#play1Display");
var play2Display = document.getElementById("play2Display");
var numberInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var input = document.querySelector("input");
var p = document.querySelector("p");
var p1Score = 0;
var p2Score = 0;
//gameOver is not True at the beginning of the game
var gameOver = false;
//were going to compare player 1 and 2 score to the winningScore
var winningScore = 5;





player1.addEventListener("click", function() {
	if(!gameOver) {
		p1Score++;
		if(p1Score === winningScore) {
			play1Display.classList.add("winner");
		 	gameOver = true;
		}
	play1Display.textContent = p1Score;
	}

});

player2.addEventListener("click", function() {
	if(!gameOver) {
		p2Score++;
		if(p2Score === winningScore) {
			play2Display.classList.add("winner");
			gameOver = true;
		}
		play2Display.textContent = p2Score;
	}
	
});

resetButton.addEventListener("click", function() {
	reset();
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	play1Display.textContent = 0;
	play2Display.textContent = 0;
	play1Display.classList.remove("winner");
	play2Display.classList.remove("winner");
	gameOver = false;
}

numberInput.addEventListener("change", function() {
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});
