'use strict'

const ui = require('./ui')
const api = require('./api')
const store = require('./../store')

const isGameOver = function () {
  if (index[0] === null || index[1] === null || index[2] === null ||
  index[3] === null || index[4] === null || index[5] === null ||
  index[6] === null || index[7] === null || index[8] === null) {
    if ( //horizontal victories
        index[0] === 'X' && index[1] === 'X' && index[2] === 'X' ||
        index[3] === 'X' && index[4] === 'X' && index[5] === 'X' ||
        index[6] === 'X' && index[7] === 'X' && index[8] === 'X' ||
          //veritcal victories
        index[0] === 'X' && index[3] === 'X' && index[6] === 'X' ||
        index[1] === 'X' && index[4] === 'X' && index[7] === 'X' ||
        index[2] === 'X' && index[5] === 'X' && index[8] === 'X' ||
          //diagonal victories
        index[0] === 'X' && index[4] === 'X' && index[8] === 'X' ||
        index[2] === 'X' && index[4] === 'X' && index[6] === 'X') {
      console.log('X wins!')
    } else if ( //horizontal victories
        index[0] === 'O' && index[1] === 'O' && index[2] === 'O' ||
        index[3] === 'O' && index[4] === 'O' && index[5] === 'O' ||
        index[6] === 'O' && index[7] === 'O' && index[8] === 'O' ||
          //veritcal victories
        index[0] === 'O' && index[3] === 'O' && index[6] === 'O' ||
        index[1] === 'O' && index[4] === 'O' && index[7] === 'O' ||
        index[2] === 'O' && index[5] === 'O' && index[8] === 'O' ||
          //diagonal victories
        index[0] === 'O' && index[4] === 'O' && index[8] === 'O' ||
        index[2] === 'O' && index[4] === 'O' && index[6] === 'O') {
      console.log('O wins!')
  }
console.log('The game continues!')
}
console.log('The game is a tie!')

module.exports = {
  isGameOver
}
