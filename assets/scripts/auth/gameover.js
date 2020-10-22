'use strict'

const store = require('./../store')

const isGameOver = function () {
  const index = store.game.cells
  if (index[0] === "" || index[1] === "" || index[2] === "" ||
  index[3] === "" || index[4] === "" || index[5] === "" ||
  index[6] === "" || index[7] === "" || index[8] === "") {
    if ( // horizontal victories
      index[0] === 'X' && index[1] === 'X' && index[2] === 'X' ||
        index[3] === 'X' && index[4] === 'X' && index[5] === 'X' ||
        index[6] === 'X' && index[7] === 'X' && index[8] === 'X' ||
      // veritcal victories
        index[0] === 'X' && index[3] === 'X' && index[6] === 'X' ||
        index[1] === 'X' && index[4] === 'X' && index[7] === 'X' ||
        index[2] === 'X' && index[5] === 'X' && index[8] === 'X' ||
      // diagonal victories
        index[0] === 'X' && index[4] === 'X' && index[8] === 'X' ||
        index[2] === 'X' && index[4] === 'X' && index[6] === 'X') {
      $("#notification").text('X WINS!!!')
      return true
    } else if ( // horizontal victories
      index[0] === 'O' && index[1] === 'O' && index[2] === 'O' ||
        index[3] === 'O' && index[4] === 'O' && index[5] === 'O' ||
        index[6] === 'O' && index[7] === 'O' && index[8] === 'O' ||
      // veritcal victories
        index[0] === 'O' && index[3] === 'O' && index[6] === 'O' ||
        index[1] === 'O' && index[4] === 'O' && index[7] === 'O' ||
        index[2] === 'O' && index[5] === 'O' && index[8] === 'O' ||
      // diagonal victories
        index[0] === 'O' && index[4] === 'O' && index[8] === 'O' ||
        index[2] === 'O' && index[4] === 'O' && index[6] === 'O') {
      $("#notification").text('O WINS!!!')
      return true
    }
  } else if ((index[0] !== "" || index[1] !== "" || index[2] !== "" ||
  index[3] !== "" || index[4] !== "" || index[5] !== "" ||
  index[6] !== "" || index[7] !== "" || index[8] !== "")) {
    $("#notification").text('Its A Tie!!!')
    return true
  }
  return false
}

module.exports = {
  isGameOver
}
