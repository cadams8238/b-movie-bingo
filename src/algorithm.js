// import shuffle from 'lodash/shuffle';
// import slice from 'lodash/slice';
const squares = require('./squares.json'),
      shuffle = require('lodash/shuffle'),
      slice = require('lodash/slice'),
      blank = {
        "name": "BLANK SQUARE",
        "rule": ""
      };


function getBingoCardSquares(data) {
  const bingoCard = [];

  // const shuffled = shuffle(squares);
  // const newCard = [...slice(shuffled, 0, 12), blank, ...slice(shuffled, 12, 24)];
  // console.log(newCard);

  while (bingoCard.length !== 25) {
    const randomIndex = Math.floor(Math.random() * data.length);
    let duplicate = false;

    for (let i = 0; i < bingoCard.length; i++) {
      if (bingoCard[i].name === data[randomIndex].name) {
        duplicate = true;
      }
    }

    if (!duplicate) {
      bingoCard.push(data[randomIndex]);
    }
    // console.log(bingoCard);
  }
  return bingoCard;

  // return newCard;
}


const newBingoCard = getBingoCardSquares(squares);

module.exports = newBingoCard;
