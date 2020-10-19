'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const store = require('./../store')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const onStartGame = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log('this is data in start game ', data)
  api.startGame(data)
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}
const onCheckGame = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.checkGame(data)
    .then(ui.checkGameSuccess)
    .catch(ui.checkGameFailure)
}

const onBoxClick = (event) => {
  event.preventDefault()
  const box = $(event.target)
  const boxIndex = box.data('cell-index')
  console.log('this is box index ', boxIndex)
  box.data('index', boxIndex)
  box.data('value', store.currentPlayer)
  box.text(store.currentPlayer)
  box.css('background', 'transparent')
  const data = {
    game: {
      cell: {
        index: boxIndex,
        value: store.currentPlayer
      },
      over: false
    }
  }
  console.log('data is ', data)
  api.updateGame(data)
    .then(ui.onBoxClickSuccess)
    .catch(ui.onBoxClickFailure)
  store.currentPlayer = store.currentPlayer === 'O' ? 'X' : 'O'
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onStartGame,
  onCheckGame,
  onBoxClick
}
