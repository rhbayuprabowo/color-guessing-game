//initiate all var
var numberColors = 6;
var colors = [];
var pickedColor = pickAColor(colors);
var h1 = document.querySelector("h1");
var squares = document.getElementsByClassName("square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var newGameButton = document.querySelector("#newGame");
var modeButton = document.querySelectorAll(".mode");


//add event listener to newGameButton
setupNewGameButtonListener();
//add event listener to all mode button
setupAllModeButtonListener();
//add event listener to squares
setupAllSquareListener();
//create new game
newGame(numberColors);


//All FUNCTION GO HERE
function setupNewGameButtonListener() {
	newGameButton.addEventListener("click", function() {
    newGame(numberColors);
});
}

function setupAllModeButtonListener () {
	for (var i = 0; i < modeButton.length; i++) {
    /* jshint loopfunc: true */
    modeButton[i].addEventListener("click", function() {
        modeButton[0].classList.remove("selected");
        modeButton[1].classList.remove("selected");
        this.classList.add("selected");
        if (this.textContent === "Easy") {
            numberColors = 3;
        } else {
            numberColors = 6;
        }
        newGame(numberColors);
    });
}
}

function setupAllSquareListener () {
	for (var i = 0; i < squares.length; i++) {
    /* jshint loopfunc: true */
    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            message.textContent = "You are right!";
            setAllSquareColor(pickedColor);
            h1.style.backgroundColor = pickedColor;
            newGameButton.textContent = "Play Agin ?";
        } else {
            message.textContent = "Try Again!";
            this.style.backgroundColor = "#232323";
        }
    });
}
}

function setColor() {
    var r = randomValRGB();
    var g = randomValRGB();
    var b = randomValRGB();
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function randomValRGB() {
    return Math.floor(Math.random() * 256);
}

function generateColors(size) {
    //set newColors to empty array
    var newColors = [];
    for (var i = 0; i < size; i++) {
        newColors.push(setColor());
    }
    return newColors;
}

function pickAColor() {
    var random = Math.floor(Math.random() * this.colors.length);
    return this.colors[random];
}

function setAllSquareColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function newGame(sizeColor) {
    newGameButton.textContent = "New Colors";
    //set default color h1
    h1.style.backgroundColor = "steelblue";
    //empty message
    message.textContent = "";
    //generate colors
    colors = generateColors(sizeColor);
    //set pickedColor based random color from colors
    pickedColor = pickAColor(colors);
    //set colorDisplay
    colorDisplay.textContent = pickedColor;
    //set background squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = 'block';
        } else {
            squares[i].style.display = 'none';
        }
    }
}