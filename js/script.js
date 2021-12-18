var board = [] 




var tiles = [] 

 
 dragElement(document.getElementById(""));
 var numberRemaining = 100;
 var letter = /^[A-Z]+$/;
 var word = [];
 var dictionary =  {};

 var pieceLetter = resetPieceLetter();
 
 function resetPieceLetter(){
	 
	pieceLetter = [
	{"letter": "_", "value" : 0,  "letter-distribution" : 2,  "remaining-tiles" : 2},
	{"letter": "A", "value" : 1,  "letter-distribution" : 9,  "remaining-tiles" : 9},
	{"letter": "B", "value" : 3,  "letter-distribution" : 2,  "remaining-tiles" : 2},
	{"letter": "C", "value" : 3,  "letter-distribution" : 2,  "remaining-tiles" : 2},
	{"letter": "D", "value" : 2,  "letter-distribution" : 4,  "remaining-tiles" : 4},
	{"letter": "E", "value" : 1,  "letter-distribution" : 12, "remaining-tiles" : 12},
	{"letter": "F", "value" : 4,  "letter-distribution" : 2,  "remaining-tiles" : 2},
	{"letter": "G", "value" : 2,  "letter-distribution" : 3,  "remaining-tiles" : 3},
	{"letter": "H","value" : 4,  "letter-distribution" : 2,  "remaining-tiles" : 2},
	{"letter": "I", "value" : 1,  "letter-distribution" : 9,  "remaining-tiles" : 9},
	{"letter": "J", "value" : 8,  "letter-distribution" : 1,  "remaining-tiles" : 1},
	{"letter": "K", "value" : 5,  "letter-distribution" : 1,  "remaining-tiles" : 1},
	{"letter": "L", "value" : 1,  "letter-distribution" : 4,  "remaining-tiles" : 4},
	{"letter": "M", "value" : 3,  "letter-distribution" : 2,  "remaining-tiles" : 2},
	{"letter": "N", "value" : 1,  "letter-distribution" : 6,  "remaining-tiles" : 6},
	{"letter": "O", "value" : 1,  "letter-distribution" : 8,  "remaining-tiles" : 8},
	{"letter": "P", "value" : 3,  "letter-distribution" : 2,  "remaining-tiles" : 2},
	{"letter": "Q", "value" : 10, "letter-distribution" : 1,  "remaining-tiles" : 1},
	{"letter": "R", "value" : 1,  "letter-distribution" : 6,  "remaining-tiles" : 6},
	{"letter": "S", "value" : 1,  "letter-distribution" : 4,  "remaining-tiles" : 4},
	{"letter": "T", "value" : 1,  "letter-distribution" : 6,  "remaining-tiles" : 6},
	{"letter": "U", "value" : 1,  "letter-distribution" : 4,  "remaining-tiles" : 4},
	{"letter": "V", "value" : 4,  "letter-distribution" : 2,  "remaining-tiles" : 2},
	{"letter": "W", "value" : 4,  "letter-distribution" : 2,  "remaining-tiles" : 2},
	{"letter": "X", "value" : 8,  "letter-distribution" : 1,  "remaining-tiles" : 1},
	{"letter": "Y", "value" : 4,  "letter-distribution" : 2,  "remaining-tiles" : 2},
	{"letter": "Z", "value" : 10, "letter-distribution" : 1,  "remaining-tiles" : 1}
 ];	 
 }
 
 function getRandonPiece(){
	 var totalPieces = remaining-tiles;
	 var randomPiece = "", randomInt;
	 var tile = tiles;
	 var piece = pieceLetter;
	  
	 
	 randomInt = getRandomInt(0, totalPieces);   
	 randonPiece = piece[randomInt];
	 
	 if(pieceLetter[randomInt] == randomPiece){
	 pieceLetter[randomInt].remaining-tiles = pieceLetter[randomInt].remaining-tiles - 1;
	 return randomPiece;
	 }
 }
 
 function getTile(){
	 var letter;
	 var piece = "";
	 var img_left, img_top, pos;
	 var tileLocation;
	 for {var i = 0; i < 7; i++}{
		 letter  = getRandonPiece();
		$("#rack").append("<img id="piece" +i+ "" src="graphics_data/Scrabble_Tiles_" + letter+ ".jpg" ></img>");
		var tileId = "#piece"+i;
	
	}
 }
 
 $( document ).ready(function() {
	 resetPieceLetter();
	 getTile();
 });