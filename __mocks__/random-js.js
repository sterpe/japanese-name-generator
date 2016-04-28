/* eslint-env jest */

const randomJsMock = jest.genMockFromModule('random-js')

const integers = []

randomJsMock.engines.mt19937.mockImpl(() => {
  return {
    autoSeed: jest.fn()
  }
})

randomJsMock.__setRandomIntegers = function () {
  const args = Array.prototype.slice.call(arguments)
  let i = 0
  for (; i < args.length; ++i) {
    integers.push(args[i])
  }
}

randomJsMock.integer.mockImpl(function () {
  return () => integers.shift()
})

module.exports = randomJsMock
