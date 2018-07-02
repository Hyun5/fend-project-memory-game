/*
 * Create a list that holds all of your cards
 */
let allCards = document.querySelectorAll(".card");

// Add class name("open", "show") when Card is clicked
// allCards.forEach(function(card){
//   card.addEventListener("click", function(e){
//     console.log("Card is clicked. 1");
//     card.classList.add("open", "show");
//   })
// })

let cardArray = [...allCards];
// let cardArray = [];
let openCards = [];
let matchingCards = [];

const deck = document.querySelector(".deck");

const moves = document.querySelector(".moves");
let counter = 0;
moves.innerText = counter;

let star = document.querySelectorAll(".fa fa-star");
let stars = [...star];

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

function newGame() {
  for (let i = 0; i < cardArray.length; i++) {
    let card = cardArray[i];
    deck.appendChild(card);
    }
    shuffle(cardArray);
}
newGame();

cardArray.forEach(function(card) {
  card.addEventListener("click", function(){
    console.log("Card is clicked. 2");
    openCards.push(this);
    if (openCards.length <= 2) {
      this.classList.add("open", "show");
    if (openCards.length === 2) {
      countMoves();
      if (openCards[0].innerHTML === openCards[1].innerHTML){
        console.log(match);
        match();
      } else {
        console.log(match);
        noMatch();
      }
      }
      }
  })
})

function match() {
  openCards[0].classList.add("match");
  openCards[1].classList.add("match");
  matchingCards.push(this);
  openCards = [];

}

function noMatch() {
  openCards[0].classList.add("no-match");
  openCards[0].classList.add("no-match");
  setTimeout(function() {
    openCards[0].classList.remove("open", "show", "no-match");
    openCards[1].classList.remove("open", "show", "no-match");
    openCards = [];
    }, 800);
  }

function countMoves(){
  console.log(counter);
  moves.innerText = counter = counter + 1;
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