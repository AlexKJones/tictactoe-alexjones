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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
