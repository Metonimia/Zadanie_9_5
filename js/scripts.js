
var buttons = document.getElementsByClassName('button');
var numberOfButtons = buttons.length;
var textArray = new Array();

for (var i = 0; i < numberOfButtons; i++) {
	var text = buttons[i].innerText;
	textArray.push(text);
}

alert(textArray);
