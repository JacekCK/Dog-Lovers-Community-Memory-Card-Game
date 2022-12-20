// must write name before page loaded

let username;

function requiredInput() {
    do {
        username = prompt("Welcome to Dog Lovers Memory Game \n\nTo proceed please enter your Name: ");
    }
    while (username.length < 2);
    document.getElementById("myinput").value = username;

};
requiredInput();

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

const grid = document.querySelector('.grid')
var cardsChosen = []
var cardsChosenId = []
// create game board 

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'assets/images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

// check for match 

// flip your card 
function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch)
    }
}


createBoard()



})
