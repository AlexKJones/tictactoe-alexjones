'use strict'

const store = require('./../store')
const gameover = require('./gameover')
const events = require('./events')

const signUpSuccess = function (response) {
  $("#notification").text('Thanks for signing up to play ' + response.user.email)
  console.log('sign up worked')
  $('form').trigger('reset')
}

const signUpFailure = function (error) {
  $("#notification").text('Sign up failed, try again')
  console.log('sign up didnt work for some reason')
}

const signInSuccess = function (response) {
  $("#notification").text('Thanks for signing in! ' + response.user.email)
  store.user = response.user
  $('#change-password-form').show()
  $('#sign-out').show()
  $('#check-games').show()
  $('#start-game').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  console.log('sign in worked')
  $('form').trigger('reset')
}

const signInFailure = function (error) {
  $("#notification").text('Sign in failed, try again')
  console.log('sign in didnt work')
}

const changePasswordSuccess = function () {
  $("#notification").text('Thanks for changing your password!')
  console.log('pass change worked')
  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  $("#notification").text('Password Change failed, try again')
  console.log('pass change failed')
}

const signOutSuccess = function () {
  $("#notification").text('succesfully signed out!')
  store.user = null
  $('#change-password-form').hide()
  $('#sign-out').hide()
  $('#check-games').hide()
  $('#start-game').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#game-board').hide()
  console.log('sign out worked')
  $('form').trigger('reset')
}

const signOutFailure = function (error) {
  $("#notification").text('Error, Could not sign out')
  console.log('sign out failed')
}
const startGameSuccess = function (response) {
  store.game = response.game
  store.game.id = response.game.id
  store.currentPlayer = 'X'
  console.log('this is the store in start game ', store)
  $("#notification").text('Game Started')
  $('#game-board').show()
  $('.box').text('')
  $('.box').css('background', '#EBADA1')
}

const startGameFailure = function () {
  $("#notification").text('Game could not start')
}

const checkGameSuccess = function (res) {
  console.log(res)
  const games = res.games
  $("#notification").text('You have played ' + games.length + ' games so far.')
}
const whoTurn = function (res) {
  const games = res.games.length
  if (games % 2 === 0) {
    return 'X'
  } else {
    return 'O'
  }
}

const checkGameFailure = function () {
  $("#notification").text('could not give gamecount somethings wrong')
}
const onBoxClickSuccess = function (response) {
  store.game = response.game
  console.log(store.game)
  $("#notification").text('Piece placed! Now its your turn, ' + store.currentPlayer)
  gameover.isGameOver()
}

const onBoxClickFailure = function () {
  $("#notification").text('Piece not Placed')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  startGameSuccess,
  startGameFailure,
  checkGameSuccess,
  checkGameFailure,
  onBoxClickSuccess,
  onBoxClickFailure,
  whoTurn
}
