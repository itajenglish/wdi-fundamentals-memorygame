var cardOne = "queen";
var cardTwo = "king";
var cardThree = "";
var cardFour = "";
if (cardTwo === cardFour){
  alert("You found a match!");

}else{

  alert("Sorry, try again");
}
var cardLoc = document.getElementById('game-board');

for (var i = 0; i < 4; i++){
  var cards = document.createElement('div');
  cards.className = "card";
  cardLoc.appendChild(cards);
}
