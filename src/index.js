'use strict'
const Random = require('random-js')
const mt = Random.engines.mt19937().autoSeed()
const japaneseSurnames = require('../data/names/surnames')
const maleJapaneseNames = require('../data/names/male')
const femaleJapaneseNames = require('../data/names/female')

function randomOf (array) {
  return array[Random.integer(0, array.length - 1)(mt)]
}

module.exports = function (options) {
  const gender = ['male', 'female']
  const name = []

  options = options || {}
  options.gender = options.gender || randomOf(gender)

  name.push(randomOf(japaneseSurnames))
  name.push(options.gender === 'male'
    ? randomOf(maleJapaneseNames)
    : randomOf(femaleJapaneseNames))
  return {
    gender: options.gender,
    name: name[1],
    surname: name[0],
    fullName: name.join(' ')
  }
}
