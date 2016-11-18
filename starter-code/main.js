alert('Hello, friends.');


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function createBoard() {
  var element = document.getElementById('game-board');
  for (var i = 0; i < cards.length; i++) {
     var newDiv = document.createElement("div");
     newDiv.className = "card";
     newDiv.setAttribute('data-card', cards[i]);
     newDiv.addEventListener('click', isTwoCards);
     element.appendChild(newDiv);
  }
}

function isMatch(cardsInPlay) {
	if(cardsInPlay[0] == cardsInPlay[1]) {
  	alert("MATCH!");
  } else {
  	alert("NO MATCH!");
  }
}

function isTwoCards() {
	var selectedCard = this.getAttribute('data-card');
	cardsInPlay.push(selectedCard);
  if(selectedCard == "king") {
     	this.innerHTML = '<img class="pic" src="kinglion.JPG"/>';
  } else {
    	this.innerHTML = '<img class="pic" src="queen1.JPG"/>';
  }
  if(cardsInPlay.length == 2) {
  	isMatch(cardsInPlay);
    cardsInPlay = [];
    document.getElementsByClassName("card").innerHTML ="";
  }
}

createBoard();