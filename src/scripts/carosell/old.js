// import { cards } from './carosell-content';

// const btnLeft = document.getElementById('carosell-left');
// const btnRight = document.getElementById('carosell-right');
// const carosell = document.getElementById('portfolio__carosell');

// // document.addEventListener('click', (e) => {
// //   cardFunction();
// // });

// btnRight.addEventListener('click', (e) => {
//   cardFunctionRight();
// });

// // btnLeft.addEventListener('click', (e) => {
// //   cardFunctionLeft();
// // });

// // let currentCardIndex = 0;

// (function appendInitialCards() {
//   for (let i = 0; i < 3; i++) {
//     carosell.appendChild(cards[i]);
//   }
// })();

// // const cardFunctionLeft = function () {
// //   const currentId = carosell.children[0].id.slice(5);
// //   currentCardIndex = currentId;

// //   carosell.innerHTML = '';
// //   const nextElements = nextCardsToDisplayLeft(currentCardIndex);
// //   appendToDom(...nextElements);
// // };

// const renderedCards = [cards[0], cards[1], cards[2]];
// let nextLeftItem, nextRightItem;
// let currentFirstId;
// let currentCardIndexRight;

// function right() {
//   const lastItem = carosell.children[2];
//   const lastItemId = lastItem.id.slice(5);

//   if (lastItemId < cards.length - 1) {
//     carosell.lastChild.remove();
//     carosell.append(cards[1]);
//   }
// }

// //   currentCardIndexLeft = renderedCards[renderedCards.length - 1].id.slice(5);

// function left() {
//   nextRightItem = renderedCards.pop(0, 1);
//   currentCardIndexRight = renderedCards[0].id.slice(5);
//   renderedCards.unshift(cards[currentCardIndex]);
// }

// const cardFunctionRight = function () {
//   right();
// };








// // function nextCardsToDisplayLeft(current) {
// //   let nextElement, nextElement1, nextElement2;

// //   if (current == 0) {
// //     nextElement = cards[cards.length - 1];
// //     nextElement1 = cards[0];
// //     nextElement2 = cards[1];
// //   } else if (current == 1) {
// //     nextElement = cards[0];
// //     nextElement1 = cards[current - 2];
// //     nextElement2 = cards[current - 1];
// //   }

// //   return [nextElement, nextElement1, nextElement2];
// // }

// //
// //
// //

// function nextCardsToDisplay() {
//   let nextElement, nextElement1, nextElement2;

//   if (currentCardIndex <= 2) {
//     currentCardIndex += 1;
//     nextElement = cards[currentCardIndex];
//     nextElement1 = cards[currentCardIndex + 1];
//     nextElement2 = cards[currentCardIndex + 2];
//   } else if (currentCardIndex == 3) {
//     currentCardIndex += 1;
//     nextElement = cards[currentCardIndex];
//     nextElement1 = cards[currentCardIndex + 1];
//     nextElement2 = cards[0];
//   } else if (currentCardIndex == 4) {
//     currentCardIndex += 1;
//     nextElement = cards[currentCardIndex];
//     nextElement1 = cards[0];
//     nextElement2 = cards[1];
//   } else if (currentCardIndex == 5) {
//     nextElement = cards[0];
//     nextElement1 = cards[1];
//     nextElement2 = cards[2];
//     currentCardIndex = 0;
//   }

//   return [nextElement, nextElement1, nextElement2];
// }

// function appendToDom(...elem) {
//   elem.forEach((e) => {
//     carosell.appendChild(e);
//   });
// }
