var squares = document.getElementsByClassName("square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
//Fill colors
var colors = [];
for (var i = 0; i < squares.length; i++) {
    colors.push(setColor());
}
var randomNumber = Math.floor((Math.random() * 5));
var pickedColor = colors[randomNumber];
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //set squares background color
    squares[i].style.backgroundColor = colors[i];
    //add event listener to squares
    /* jshint loopfunc: true */
    squares[i].addEventListener("click", function() {
        if (this.style.backgroundColor === pickedColor) {
        	message.textContent ="You are right!!!";
            setAllSquareColor(pickedColor);
        } else {
        	message.textContent ="Try Again!";
            this.style.backgroundColor = "#232323";
        }
    });
}


//All FUNCTION GO HERE
function setColor() {
    var r = randomValRGB();
    var g = randomValRGB();
    var b = randomValRGB();
    return "rgb(" + r + ", " + g + ", " + b + ")";
}


function randomValRGB() {
    return Math.floor(Math.random() * 255);
}

function setAllSquareColor(color) {
	for(var i=0; i< squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}