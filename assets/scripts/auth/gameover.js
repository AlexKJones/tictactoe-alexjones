'use strict'

const api = require('./api')
const store = require('./../store')

const isGameOver = function () {
  const index = store.game.cells
  console.log(store.game.cells)
  console.log('cell 3 is ', store.game.cells[3])
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
      console.log('X wins!')
      $("#notification").text('X WINS!!!')
      return true
      // const data = {
      //   game: {
      //     cell: {
      //       index: store.boxBoxIndex,
      //       value: store.currentPlayer
      //     },
      //     over: true
      //   }
      // }
      // console.log('data is ', data)
      // api.updateGame(data)
      //   .then(onGameOverSuccess())
      //   .catch(onGameOverFailure())
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
      console.log('O wins!')
      $("#notification").text('O WINS!!!')
      return true
    }
} else {
console.log('The game is a tie!')
$("#notification").text('Its A Tie!!!')
return true
}
return false
}

// const onGameOverSuccess = function () {
//   $("#notification").text('The Game Is Over! ' + store.currentPlayer + ' Wins!')
//   console.log('game over game data is ', store.game)
// }
//
// const onGameOverFailure = function () {
//   $("#notification").text('something wrong with gameover')
//   console.log('gameover not working')
// }
module.exports = {
  isGameOver
}
