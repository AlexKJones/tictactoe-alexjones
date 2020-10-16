'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

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
const onTopLeft = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.checkGame(data)
    .then(ui.topLeftSuccess)
    .catch(ui.topLeftFailure)
}
const onTopMiddle = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.checkGame(data)
    .then(ui.topMiddleSuccess)
    .catch(ui.topMiddleFailure)
}
const onTopRight = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.checkGame(data)
    .then(ui.topRightSuccess)
    .catch(ui.topRightFailure)
}
const onMiddleLeft = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.checkGame(data)
    .then(ui.middleLeftSuccess)
    .catch(ui.middleLeftFailure)
}
const onMiddleMiddle = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.checkGame(data)
    .then(ui.middleMiddleSuccess)
    .catch(ui.middleMiddleFailure)
}
const onMiddleRight = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.checkGame(data)
    .then(ui.middleRightSuccess)
    .catch(ui.middleRightFailure)
}
const onBottomLeft = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.checkGame(data)
    .then(ui.bottomLeftSuccess)
    .catch(ui.bottomLeftFailure)
}
const onBottomMiddle = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.checkGame(data)
    .then(ui.bottomMiddleSuccess)
    .catch(ui.bottomMiddleFailure)
}
const onBottomRight = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.checkGame(data)
    .then(ui.bottomRightSuccess)
    .catch(ui.bottomRightFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onStartGame,
  onCheckGame,
  onTopLeft,
  onTopMiddle,
  onTopRight,
  onMiddleLeft,
  onMiddleMiddle,
  onMiddleRight,
  onBottomLeft,
  onBottomMiddle,
  onBottomRight
}
