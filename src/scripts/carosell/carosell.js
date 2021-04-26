import { cards } from './carosell-content';

const btnLeft = document.getElementById('carosell-left');
const btnRight = document.getElementById('carosell-right');
const carosell = document.getElementById('portfolio__carosell');

(function appendInitialCards() {
  for (let i = 0; i < 3; i++) {
    carosell.appendChild(cards[i]);
  }
})();

btnRight.addEventListener('click', (e) => {
  const currentCardIds = getIds();
  const newCards = right(currentCardIds);
  carosell.innerHTML = '';
  appendToDom(...newCards);
});

btnLeft.addEventListener('click', (e) => {
  const currentCardIds = getIds();
  const newCards = left(currentCardIds);
  carosell.innerHTML = '';
  appendToDom(...newCards);
});

function getIds() {
  const firstCardId = carosell.children[0].id.slice(5);
  const secondCardId = carosell.children[1].id.slice(5);
  const lastChildId = carosell.children[2].id.slice(5);

  return [firstCardId, secondCardId, lastChildId];
}

function right(cardIds) {
  const nextCardsArr = [];

  cardIds.forEach((cardId) => {
    nextCardsRight(cardId);
  });

  function nextCardsRight(cardId) {
    cards.forEach((e, i) => {
      if (cardId == i && cardId < cards.length - 1) {
        nextCardsArr.push(cards[i + 1]);
      } else if (cardId == cards.length - 1) {
        nextCardsArr.push(cards[0]);
      }
    });
  }

  return nextCardsArr;
}

function left(cardIds) {
  const nextCardsArr = [];

  cardIds.forEach((cardId) => {
    nextCardsLeft(cardId);
  });

  function nextCardsLeft(cardId) {
    cards.forEach((e, i) => {
      if (cardId == i && cardId > 0) {
        nextCardsArr.push(cards[i - 1]);
      } else if (cardId == 0) {
        nextCardsArr.push(cards[cards.length - 1]);
      }
    });
  }

  return nextCardsArr;
}

function appendToDom(...elem) {
  elem.forEach((e) => {
    carosell.appendChild(e);
  });
}
