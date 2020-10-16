'use strict'

const store = require('./../store')

const signUpSuccess = function (response) {
  $("#notification").text('Thanks for signing up to play ' + response.user.email)
  console.log('sign up worked')
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
}

const signInFailure = function (error) {
  $("#notification").text('Sign in failed, try again')
  console.log('sign in didnt work')
}

const changePasswordSuccess = function () {
  $("#notification").text('Thanks for changing your password!')
  console.log('pass change worked')
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
  console.log('sign out worked')
}

const signOutFailure = function (error) {
  $("#notification").text('Error, Could not sign out')
  console.log('sign out failed')
}
let gameCount = 0
const startGameSuccess = function () {
  $("#notification").text('Game Started')
  $('#game-board').show()
  $(gameCount++)
}

const startGameFailure = function () {
  $("#notification").text('Game could not start')
}

const checkGameSuccess = function () {
  $("#notification").text('You have played ' + gameCount + ' games so far.')
}

const checkGameFailure = function () {
  $("#notification").text('could not give gamecount somethings wrong')
}
const topLeftSuccess = function () {
  $("#notification").text('Top Left Clicked')
}
const topLeftFailure = function () {
  $("#notification").text('Top Left not working')
}
const topMiddleSuccess = function () {
  $("#notification").text('Top Middle Clicked')
}
const topMiddleFailure = function () {
  $("#notification").text('Top Middle not working')
}
const topRightSuccess = function () {
  $("#notification").text('Top Right Clicked')
}
const topRightFailure = function () {
  $("#notification").text('Top Right not working')
}
const middleLeftSuccess = function () {
  $("#notification").text('middle Left Clicked')
}
const middleLeftFailure = function () {
  $("#notification").text('middle Left not working')
}
const middleMiddleSuccess = function () {
  $("#notification").text('middle Middle Clicked')
}
const middleMiddleFailure = function () {
  $("#notification").text('middle Middle not working')
}
const middleRightSuccess = function () {
  $("#notification").text('middle Right Clicked')
}
const middleRightFailure = function () {
  $("#notification").text('middle Right not working')
}
const bottomLeftSuccess = function () {
  $("#notification").text('bottom Left Clicked')
}
const bottomLeftFailure = function () {
  $("#notification").text('bottom Left not working')
}
const bottomMiddleSuccess = function () {
  $("#notification").text('bottom Middle Clicked')
}
const bottomMiddleFailure = function () {
  $("#notification").text('bottom Middle not working')
}
const bottomRightSuccess = function () {
  $("#notification").text('bottom Right Clicked')
}
const bottomRightFailure = function () {
  $("#notification").text('bottom Right not working')
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
  topLeftSuccess,
  topLeftFailure,
  topMiddleSuccess,
  topMiddleFailure,
  topRightSuccess,
  topRightFailure,
  middleLeftSuccess,
  middleLeftFailure,
  middleMiddleSuccess,
  middleMiddleFailure,
  middleRightSuccess,
  middleRightFailure,
  bottomLeftSuccess,
  bottomLeftFailure,
  bottomMiddleSuccess,
  bottomMiddleFailure,
  bottomRightSuccess,
  bottomRightFailure
}
