/* eslint-env jest */

const FILE = '../src'

jest.dontMock(FILE)

describe([
  FILE
].join(' '), () => {
  it([
    'should generate a completely random name'
  ].join(' '), () => {
    const Random = require('random-js')
    let A = 0
    let B = 15
    let C = 27
    Random.__setRandomIntegers(A, B, C)
    const name = require(FILE)
    const surnames = require('../data/names/surnames')
    const malenames = require('../data/names/male')
    expect(name()).toEqual({
      gender: 'male',
      name: [surnames[B], malenames[C]].join(' '),
      surname: surnames[B],
      firstName: malenames[C]
    })
  })
  it([
    'should generate a completely random female name'
  ].join(' '), () => {
    const Random = require('random-js')
    let A = 1
    let B = 44
    let C = 76
    Random.__setRandomIntegers(A, B, C)
    const name = require(FILE)
    const surnames = require('../data/names/surnames')
    const femalenames = require('../data/names/female')
    expect(name()).toEqual({
      gender: 'female',
      name: [surnames[B], femalenames[C]].join(' '),
      surname: surnames[B],
      firstName: femalenames[C]
    })
  })
  it([
    'should generate a name of the specified gender'
  ].join(' '), () => {
    const Random = require('random-js')
    let A = 66
    let B = 80
    Random.__setRandomIntegers(A, B)
    const name = require(FILE)
    const surnames = require('../data/names/surnames')
    const femalenames = require('../data/names/female')
    expect(name({ gender: 'female' })).toEqual({
      gender: 'female',
      name: [surnames[A], femalenames[B]].join(' '),
      surname: surnames[A],
      firstName: femalenames[B]
    })
  })
})
