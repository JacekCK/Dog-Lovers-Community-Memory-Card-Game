// must write name before page loaded

let username;

function requiredInput() {
    do {
        username = prompt("🐶 Welcome to Dog Lovers Memory Game 🐶 \n\n🃏 The goal of this game is to find two matching cards 🃏 \n\n👑 Scores six pairs to win!! 👑 \n\nTo proceed please enter your Name: ");
    }
    while (username.length < 2);
    document.getElementById("myinput").value = username;

};
requiredInput();

const btn = document.querySelector('#reset')

btn.addEventListener('click', function() {
    location.reload();
})

document.addEventListener('DOMContentLoaded', () => {

    // card options
    const cardArray = [
        {
            name: 'dog1',
            img: 'assets/images/dog1.png'
        },
        {
            name: 'dog1',
            img: 'assets/images/dog1.png'
        },
        {
            name: 'dog2',
            img: 'assets/images/dog2.png'
        },
        {
            name: 'dog2',
            img: 'assets/images/dog2.png'
        },
        {
            name: 'dog3',
            img: 'assets/images/dog3.png'
        },
        {
            name: 'dog3',
            img: 'assets/images/dog3.png'
        },
        {
            name: 'dog4',
            img: 'assets/images/dog4.png'
        },
        {
            name: 'dog4',
            img: 'assets/images/dog4.png'
        },
        {
            name: 'dog5',
            img: 'assets/images/dog5.png'
        },
        {
            name: 'dog5',
            img: 'assets/images/dog5.png'
        },
        {
            name: 'dog6',
            img: 'assets/images/dog6.png'
        },
        {
            name: 'dog6',
            img: 'assets/images/dog6.png'
        },
    ]

    cardArray.sort(() => Math.random() - 0.5);

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')

var cardsChosen = []
var cardsChosenId = []
var cardsWon = []
// create game board 

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'assets/images/blank.png')
        card.setAttribute('alt', 'img')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

// check for match 
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = parseInt(cardsChosenId[0])
    const optionTwoId = parseInt(cardsChosenId[1])
    if (cardsChosen[0] === cardsChosen[1] && optionOneId !== optionTwoId){
        alert('You found a match')
        cards[optionOneId].style.visibility = 'visible'
        cards[optionTwoId].style.visibility = 'visible'
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'assets/images/blank.png')
        cards[optionTwoId].setAttribute('src', 'assets/images/blank.png')
        alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
    resultDisplay = alert('Congratulations You found them all!')
    }

}


// flip your card 
function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}


createBoard()



})
