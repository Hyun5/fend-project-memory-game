/*
 * Create a list that holds all of your cards
 */
let allCards = document.querySelectorAll(".card");

// Add class name("open", "show") when Card is clicked
allCards.forEach(function(card){
  card.addEventListener("click", function(e){
    card.classList.add("open", "show");
  })
})


let cardArray = [...allCards];

const deck = document.querySelector(".deck");
//
// let openCards = [];
//
// let matchingCards = [];
//
// const moves = document.querySelector(".moves");
//
// let counter = 0;
// moves.innerText = counter;
//
// let clicksCounted = [];
// let star = document.querySelectorAll(".fa fa-star");
// let stars = [...star];
//
// let second = 0;
// let minute = 0;
// let timer;
//
// const reset = document.querySelector(".restart");
//
// let movesWonIn = document.querySelector(".moves").innerHTML;
//
//



/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

cardArray = shuffle(cardArray);

// Initialization
function newGame(){
  for (let i = 0; i < cardArray.length; i++) {
  let card = cardArray[i];
  deck.appendChild(card);
  }
  shuffle(cardArray);
}
newGame();

// Check if 2 clicked cards are matched or not matched
cardArray.forEach(function (card) {
  card.addEventListener("click", function() {
    openCards.push(this);
    clicksCounted.push(this);
    starRating();
    if (openCards.length <= 2){
      this.classList.add("open", "show", "disabled");
    if (openCards.length === 2){
      countMoves;
      if (openCards[0].innerHTML === openCards[1].innerHTML) {
        match();
      } else {
        noMatch();
      }
    }
    if (second === 0 ) {
      startTimer();
    }
    }
  });
});

//
function match(){
  openCards[0].classList.add("match", "animated", "rubberBand");
  openCards[1].classList.add("match", "animated", "rubberBand");
  matchingCards.push(this);
  openCards = [];
  if (matchingCards.length === 2) {
    openModal();
  }
}
//
// function openModal() {
//   let open = document.getElementByClassName("modal");
//   open.style.display = "block";
// }
//
// function noMatch() {
  openCards[0].classList.add("no-match", "animated", "flash", "disabled");
  openCards[1].classList.add("no-match", "animated", "flash", "disabled");
  setTimeout(function(){
    openCards[0].classList.remove("open", "show", "no-match", "animated", "flash", "disabled");
    openCards[1].classList.remove("open", "show", "no-match", "animated", "flash", "disabled");
    openCards = [];
  }, 800);
}



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
