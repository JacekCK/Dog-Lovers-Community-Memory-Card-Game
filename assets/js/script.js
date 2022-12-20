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

// create game board 

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'assets/images/blank.png')
        card.setAttribute('data-id', i)
        // card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

createBoard()



})
