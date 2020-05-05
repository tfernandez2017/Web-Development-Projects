var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var newColorsButton = document.querySelector("#newColors");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() {
	//mode Buttons event listeners
	setupModeButtons();
	setupSquares();
	reset();
}


function setupModeButtons() {
	for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;		
		reset();
		});
	}
}


function setupSquares() {
		for(var i = 0; i < squares.length; i++) {
	//add click listeners squares
	squares[i].addEventListener("click", function() {
	//grab color of clicked square. "this" refers to item that was clicked
	var clickedColor = this.style.backgroundColor;
	//compare color to pickedColor using if statement
	if(clickedColor === pickedColor) {
		message.textContent = "Correct!";
		newColorsButton.textContent = "Play Again";
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
	}else {
		this.style.backgroundColor = "#232323";
		message.textContent = "Try Again";
	}
	});
}
}

function reset() {
	 colors = generateRandomColors(numSquares);
	//pick new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	message.textContent = "";
	//change the colors of the squares on the page
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";

}



newColorsButton.addEventListener("click", function() {
	reset();
})



function changeColors(color) {
	//loop through all the squares
	for(var i = 0; i < squares.length; i++) {
	//change each color to match given color
	squares[i].style.backgroundColor = color;
	}
	
}

function pickColor() {
	//pick a random number
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++) {
		//get random color and push in to array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red"from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 to 255
	var b = Math.floor(Math.random() * 256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
// The logic for the click events, when we click one the squares
// we want to run code that will compare the color we clicked to the
// goal color and then change the background of that square to color of backgorund
