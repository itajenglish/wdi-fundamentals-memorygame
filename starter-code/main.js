var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var cardLoc = document.getElementById('game-board');

function createBoard() {
    //add each card to the game-board

    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('div');
        cardElement.className = "card";
        cardLoc.appendChild(cardElement);
        cardElement.setAttribute('data-card', cards[i]);
        cardElement.addEventListener('click',isTwoCards);

        }
    }
    createBoard();
    //Checks for a match.
    function isMatch(cards) {
        if (cards[0] === cards[1]) {
            alert('You found a match!');
        }else{
            alert('Sorry not match found!');
        }
    }


    function isTwoCards() {
        // Add cards to cardsInPlay Array
        cardsInPlay.push(this.getAttribute('data-card'));
        console.log(this.getAttribute('data-card'));

        if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='king.png'>"; // king
	} else {
		this.innerHTML = "<img src='queen.png'>"; //queen
	}
        // If cards in play check for Match.
        if (cardsInPlay.length === 2) {

            isMatch(cardsInPlay);
            cardsInPlay = [];

        }
    }
