'use strict'

const events = require('./auth/events')
$(() => {
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)
  $('#change-password-form').hide()
  $('#sign-out').hide()
  $('#start-game').on('click', events.onStartGame)
  $('#check-games').on('click', events.onCheckGame)
  $('#start-game').hide()
  $('#check-games').hide()
  $('#game-board').hide()
  $('.box').on('click', events.onBoxClick)
})
