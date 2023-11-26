document.addEventListener('DOMContentLoaded', function () {
    const shuffleButton = document.getElementById('shuffleButton');
    const cardDeck = document.querySelector('.card-deck');

    const suits = ['♠️', '♥️', '♦️', '♣️'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    // Función para crear una baraja de cartas
    function createDeck() {
        const deck = [];
        for (let suit of suits) {
            for (let value of values) {
                deck.push(`${value}${suit}`);
            }
        }
        return deck;
    }

    // Función para barajar las cartas
    function shuffle(deck) {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }

    // Función para mostrar las cartas barajadas en el DOM
    function displayCards(deck) {
        cardDeck.innerHTML = '';
        for (let card of deck) {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.textContent = card;
            cardDeck.appendChild(cardElement);
        }
    }

    // Evento click para barajar las cartas al presionar el botón
    shuffleButton.addEventListener('click', function () {
        const deck = createDeck();
        shuffle(deck);
        displayCards(deck);
    });
});
