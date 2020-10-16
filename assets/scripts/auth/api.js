'use strict'
const config = require('./../config')
const store = require('./../store')
const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}
const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}
const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}
const signOut = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',

    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const startGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET',
    data: data
  })
}
const checkGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET',
    data: data
  })
}
const topLeft = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/:id',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}
const topMiddle = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/:id',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}
const topRight = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/:id',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}
const middleLeft = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/:id',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}
const middleMiddle = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/:id',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}
const middleRight = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/:id',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}
const bottomLeft = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/:id',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}
const bottomMiddle = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/:id',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}
const bottomRight = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/:id',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  startGame,
  checkGame,
  topLeft,
  topMiddle,
  topRight,
  middleLeft,
  middleMiddle,
  middleRight,
  bottomLeft,
  bottomMiddle,
  bottomRight
}
