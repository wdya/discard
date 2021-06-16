/*AUTHOR: Olivia Brennan*/

//LIST OF CELLS IN EACH GAME
var list1 = ["heart", "diamond", "number", "club", "face", "spade"];
var list2 = ["diamond", "heart", "lt7", "gt6", "red", "odd", "club", "spade", "face", "number", "even", "black"];
var list3 = ["kind4", "kind3", "kind2", "face", "lt7", "gt6", "row3", "row4", "red", "black", "even", "odd"];

//HOUSEKEEPING WHILE GAME LOADS
window.onload = function() {	
	document.getElementById("scoreDIV").style.display = "none"; //HIDE SCOREBOARD

	//CONSTANTLY CHECK FOR CLICKS (TRIGGERING toggleHighlight) IN EACH OF THE 12 CELLS
	var cells = document.getElementsByClassName("sidesContent");
	for (var i = 0; i < cells.length; i++)
		cells[i].onclick = toggleHighlight;
}

//TOGGLE BETWEEN SCOREBOARD AND COPYRIGHT
function keepScore() {
	var x = document.getElementById("scoreDIV");
	var y = document.getElementById("copyrightDIV");
	if (x.style.display === "none") {
		y.style.display = "none";
		x.style.display = "block";
	} else {
		x.style.display = "none";
		y.style.display = "block";	
	}
}

//SWITCH 'HIGHLIGHT' CELL CLASS ON AND OFF
function toggleHighlight() {
	var cell = this;
	cell.classList.toggle('highlight');
}

//RESET ALL
function playAgain(int){
	if (int === 1) cells = list1;
	if (int === 2) cells = list2;
	if (int === 3) cells = list3;
	for (var i = 0; i < cells.length; i++) {
		document.getElementById(cells[i] + "DIV").style.display = "block"; //RE-SHOW ANY HIDDEN CELLS
		document.getElementById(cells[i] + "1").checked = false; //UNCHECK EACH FIRST BOX
		document.getElementById(cells[i] + "2").checked = false; //UNCHECK EACH SECOND BOX
		if (int === 1) document.getElementById(cells[i] + "3").checked = false; //UNCHECK EACH THIRD BOX
		document.getElementById(cells[i]).className = 'sidesContent'; //UN-HIGHLIGHT ALL CELLS
		document.getElementById(cells[i] + "Button").style.display = "none"; //RE-HIDE ANY RESET BUTTONS
	}
}

//RESET ONE
function resetCell(cell, int) {
	divContent = document.getElementById("" + cell + "DIV");
	divButton = document.getElementById("" + cell + "Button");
	divContent.style.display = "block";
	//document.getElementById(cell + "1").checked = true; //UNCHECK EACH FIRST BOX
	//document.getElementById(cell + "2").checked = true; //UNCHECK EACH SECOND BOX
	if (int === 1) document.getElementById(cell + "3").checked = false; //UNCHECK EACH THIRD BOX
	else document.getElementById(cell + "2").checked = false; //UNCHECK EACH SECOND BOX
	//document.getElementById(cell).className = 'sidesContent';
	divButton.style.display = "none";
}

//HIDE ALL RESET BUTTONS DEPENDING ON GAME
function hideResets(int) {
	if (int === 1) buttons = list1;
	if (int === 2) buttons = list2;
	if (int === 3) buttons = list3;
	for (var i = 0; i < buttons.length; i++)
		document.getElementById(buttons[i] + "Button").style.display = "none";
}

//TRIGGER CELL DIV FADE WHEN ALL BOXES ARE CHECKED
function visibility(cell, int) {
	divContent = document.getElementById("" + cell + "DIV");
	divButton = document.getElementById("" + cell + "Button");
	if (int === 2)
		if (document.getElementById("" + cell + "1").checked
			&& document.getElementById("" + cell + "2").checked)
				fade(divContent, divButton); //RECONSTRUCT elementDIV VARIABLE, CALL FADE
	if (int === 3)
		if (document.getElementById("" + cell + "1").checked
			&& document.getElementById("" + cell + "2").checked
				&& document.getElementById("" + cell + "3").checked)
					fade(divContent, divButton); //RECONSTRUCT elementDIV VARIABLE, CALL FADE
}

//ADD FADE CLASS TO TRIGGERED CELL DIV (ABOVE)
function fade(divContent, divButton) {
	divContent.classList.add('fadeOut');
	setTimeout(function() { //AFTER ANIMATION ENDS, REMOVE ANIMATION CLASS, HIDE DIV NORMALLY
		divContent.style.display = "none";
		divContent.className = 'toFade';
		divButton.style.display = "block";
	}, 2000);
}

//OBJECT TO CONTAIN POINTS VARIABLES
points = {
	points1: 0,
	points2: 0,
	points3: 0,
	points4: 0,
	points5: 0,
	points6: 0
}

//CALCULATE, MODIFY, AND UPDATE POINTS
function getPoints(num, sign) {
	var pointsX = "points" + num; //RECONSTRUCT PLAYER'S POINTS VARIABLE
	if (sign) points[pointsX]++;
	else if (!sign) points[pointsX]--;
	document.getElementById(pointsX).innerHTML = points[pointsX]; //UPDATE SCOREBOARD DISPLAY
}