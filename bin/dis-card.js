/*AUTHOR: Olivia Brennan*/

//ON LOAD, HIDE SCOREBOARD
document.getElementById("scoreDIV").style.display = "none";

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

//CONSTANTLY CHECK FOR CLICKS (TRIGGERING toggleHighlight) IN EACH OF THE 12 CELLS
window.onload = function() {
	var cells = document.getElementsByClassName("sidesContent");
	for (var i = 0; i < cells.length; i++)
		cells[i].onclick = toggleHighlight;
}

//SWITCH 'HIGHLIGHT' CELL CLASS ON AND OFF
function toggleHighlight() {
	var cell = this;
	cell.classList.toggle('highlight');
}

//RESET ALL
function playAgain(int){
	if (int === 1) cells = ["heart", "diamond", "number", "club", "face", "spade"];
	if (int === 2) cells = ["diamond", "heart", "lt7", "gt6", "red", "odd", "club", "spade", "face", "number", "even", "black"];
	if (int === 3) cells = ["kind4", "kind3", "kind2", "face", "lt7", "gt6", "row3", "row4", "red", "black", "even", "odd"];
	for (var i = 0; i < cells.length; i++) {
		document.getElementById(cells[i] + "DIV").style.display = "block"; //RE-SHOW ANY HIDDEN CELLS
		document.getElementById(cells[i] + "1").checked = false; //UNCHECK EACH LEFT BOX
		document.getElementById(cells[i] + "2").checked = false; //UNCHECK EACH RIGHT BOX
		if (int === 1) document.getElementById(cells[i] + "3").checked = false; //UNCHECK EACH RIGHT BOX
		document.getElementById(cells[i]).className = 'sidesContent'; //UN-HIGHLIGHT ALL CELLS
	}
}

//TRIGGER CELL DIV FADE WHEN BOTH BOXES ARE CHECKED
function visibility(cell, int) {
	if (int === 2)
		if (document.getElementById("" + cell + "1").checked
			&& document.getElementById("" + cell + "2").checked)
				fade(document.getElementById("" + cell + "DIV")); //RECONSTRUCT elementDIV VARIABLE, CALL FADE
	if (int === 3)
		if (document.getElementById("" + cell + "1").checked
			&& document.getElementById("" + cell + "2").checked
				&& document.getElementById("" + cell + "3").checked)
					fade(document.getElementById("" + cell + "DIV")); //RECONSTRUCT elementDIV VARIABLE, CALL FADE
}

//ADD FADE CLASS TO TRIGGERED CELL DIV (ABOVE)
function fade(div) {
	div.classList.add('fadeOut');
	setTimeout(function(){ //AFTER ANIMATION ENDS, REMOVE ANIMATION CLASS, HIDE DIV NORMALLY
		div.style.display = "none";
		div.className = 'toFade';
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

//CALCULATE, INCREMENT, AND UPDATE POINTS
function getPoints(num) {
	var pointsX = "points" + num; //RECONSTRUCT PLAYER'S POINTS VARIABLE
	points[pointsX]++;
	document.getElementById(pointsX).innerHTML = points[pointsX]; //UPDATE SCOREBOARD DISPLAY
}