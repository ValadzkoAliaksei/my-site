

var letters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function readInt(){
	var number = document.getElementById("userAnswer").value;
	return parseInt(number);
	// return +document.getElementById("userAnswer").value;
}

function write(text){
	document.getElementById("passw").innerHTML = text;
}

function getRandomNumber(max){
	return Math.round(Math.random() * max)
}

function generateText(letters, length){
	var text = "";
	for(var i = 0; i < length; i++){
		var n = getRandomNumber(letters.length - 1);
		text = text + letters[n];
	}
	return(text);
}

function generate(){
	var length=readInt();
	var passw = generateText(letters, length);
	write(passw);
}
