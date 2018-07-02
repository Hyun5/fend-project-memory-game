
// Create a list that holds all of your cards
let allCards = document.querySelectorAll(".card");
let cardArray = [...allCards];
let openCards = [];
let matchingCards = [];

// Deck of All Cards
const deck = document.querySelector(".deck");

// Move Counter Variables
const moves = document.querySelector(".moves");
let counter = 0;
moves.innerText = counter;

// Loop to add event listeners to each card
for (var i = 0; i < cardArray.length; i++){
   cardArray[i].addEventListener("click", displayCard);
};

// Toggles open and show class to display cards
var displayCard = function (){
   this.classList.toggle("open");
   this.classList.toggle("show");
   this.classList.toggle("disabled");
}

// Display the cards on the page
// Shuffle the list of cards using the provided "shuffle" method below
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

// Game Initializtion
function newGame() {
  for (let i = 0; i < cardArray.length; i++) {
    let card = cardArray[i];
    deck.appendChild(card);
    }
    shuffle(cardArray);
}
newGame();

// Timer Variables
let sec = 0;
let min = 0;
let timer;
let timeClock = document.querySelector(".timer");

// Timer Start Function
function startTimer() {
  sec = 0;
  min = 0;
  timeClock.innerHTML = "0" + min + ":" + "0" + sec;
  timer = setInterval(insertTime, 1000);
}
// Stop Timer
function stopTimer() {
  clearInterval(timer);
}

// Timer Display
function insertTime() {
  sec++;
  if (sec < 10) {
    sec = `0${sec}`
  }
  if (sec > 60) {
    min++;
    sec = "00";
  }
  timeClock.innerHTML = "0" + min + ":" + sec;
}

// Set up the event listener for a card
cardArray.forEach(function(card) {
  card.addEventListener("click", function(){
    countMoves();
    if (!card.classList.contains("open") && !card.classList.contains("show") && !card.classList.contains("disabled")) {
				openCards.push(card);
    if (openCards.length <= 2) {
      this.classList.add("open", "show", "disabled");
      if (openCards.length === 2) {
        if (openCards[0].innerHTML === openCards[1].innerHTML){
          match();
        } else {
          noMatch();
        }
      }
      if (matchingCards.length == 8) {
        finalTime = timer.innerHTML;
        showModal();
        }
      }
    }
  })
})

// When Cards don't matched
function match() {
  openCards[0].classList.add("match");
  openCards[1].classList.add("match");
  matchingCards.push(this);
  openCards = [];
}

// When Cards matched
function noMatch() {
  openCards[0].classList.add("no-match", "disabled");
  openCards[1].classList.add("no-match", "disabled");
  setTimeout(function() {
    openCards[0].classList.remove("open", "show", "no-match", "disabled");
    openCards[1].classList.remove("open", "show", "no-match", "disabled");
    openCards = [];
  }, 800);
}

// Count Moves
function countMoves(){
  counter++;
  moves.innerText = counter ;
  starRating(counter);
    if (counter == 1) {
      sec = 0;
      min = 0;
      startTimer();
    }
}

// Star Rating Function Vairables
let starsList = document.querySelectorAll("ul.stars");

// Star Rating Funciton
function starRating(counter) {
  if (counter === 24) {
    starsList[0].removeChild(starsList[0].children[0]);
  } else if (counter === 30) {
    starsList[0].removeChild(starsList[0].children[0])
  } else if (counter === 36) {
    starsList[0].removeChild(starsList[0].children[0])
  } else if (counter === 42) {
    starsList[0].removeChild(starsList[0].children[0])
  }
}

// End of Game
function endGame() {
  if (matchingCards.length == 8) {
    clearInterval(interval);
    finalTime = timer.innerHTML;
    showModal();
  }
}

// Modal Buttons function
const closeButton = document.querySelector(".modal__close");
const replayButton = document.querySelector(".modal__replay");
closeButton.addEventListener("click", showModal);
replayButton.addEventListener("click", function() {
  showModal();
  resetGame();
})

// Modal Variables
const modalTime = document.querySelector(".modal__time");
const modalStars = document.querySelector(".modal__stars");
const modalMoves = document.querySelector(".modal__moves");
const modalTimerValue = document.querySelectorAll(".timer");

// Modal Funtion
function showModal() {
  stopTimer();
  const modal = document.querySelector(".modal__popup");
  modalMoves.innerText = "Moves = " + counter;
  modalStars.innerText = "Stars = " + starsList[0].childElementCount;
  modalTime.innerText = "Time = " + modalTimerValue[0].innerText;
	modal.classList.toggle("hide");
}

// Reset Stars
function resetStars() {
  if (starsList[0].childElementCount === 4) {
		starsList[0].insertAdjacentHTML("beforeend", '<li><i class="fa fa-star"></i></li>');
	} else if (starsList[0].childElementCount === 3){
			starsList[0].insertAdjacentHTML("beforeend", '<li><i class="fa fa-star"></i></li>');
      starsList[0].insertAdjacentHTML("beforeend", '<li><i class="fa fa-star"></i></li>');
	} else if (starsList[0].childElementCount === 2){
			starsList[0].insertAdjacentHTML("beforeend", '<li><i class="fa fa-star"></i></li>');
      starsList[0].insertAdjacentHTML("beforeend", '<li><i class="fa fa-star"></i></li>');
      starsList[0].insertAdjacentHTML("beforeend", '<li><i class="fa fa-star"></i></li>');
  } else if (starsList[0].childElementCount === 1){
			starsList[0].insertAdjacentHTML("beforeend", '<li><i class="fa fa-star"></i></li>');
      starsList[0].insertAdjacentHTML("beforeend", '<li><i class="fa fa-star"></i></li>');
      starsList[0].insertAdjacentHTML("beforeend", '<li><i class="fa fa-star"></i></li>');
      starsList[0].insertAdjacentHTML("beforeend", '<li><i class="fa fa-star"></i></li>');
  } else if (starsList[0].childElementCount === 0){
			starsList[0].insertAdjacentHTML("beforeend", '<li><i class="fa fa-star"></i></li>');
      starsList[0].insertAdjacentHTML("beforeend", '<li><i class="fa fa-star"></i></li>');
      starsList[0].insertAdjacentHTML("beforeend", '<li><i class="fa fa-star"></i></li>');
      starsList[0].insertAdjacentHTML("beforeend", '<li><i class="fa fa-star"></i></li>');
      starsList[0].insertAdjacentHTML("beforeend", '<li><i class="fa fa-star"></i></li>');
    }
}

// Reset Button Variables
let resetButton = document.querySelectorAll(".restart");
resetButton[0].addEventListener("click", resetGame);

// Reset Function
function resetGame() {
  counter = 0;
  moves.innerText = counter
  sec = 0;
  min = 0;
  timeClock.innerHTML = "0" + min + ":" + "0" + sec;
  clearInterval(timer);
  stopTimer();
  openCards = [];
  matchingCards = [];
  resetStars();
  allCards.forEach(function(card) {
    card.classList.remove("open", "show", "disabled", "match");
  })
  var newCardList = Array.from(allCards);
  shuffle(newCardList);
  var deck = document.querySelector(".deck");
  for (card of newCardList) {
    deck.appendChild(card);
  }
}
