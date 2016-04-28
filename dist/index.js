'use strict';

var Random = require('random-js');
var mt = Random.engines.mt19937().autoSeed();
var japaneseSurnames = require('../data/names/surnames');
var maleJapaneseNames = require('../data/names/male');
var femaleJapaneseNames = require('../data/names/female');

function randomOf(array) {
  return array[Random.integer(0, array.length - 1)(mt)];
}

module.exports = function () {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var gender = ['male', 'female'];
  var name = [];

  options.gender = options.gender || randomOf(gender);

  name.push(randomOf(japaneseSurnames));

  name.push(options.gender === 'male' ? randomOf(maleJapaneseNames) : randomOf(femaleJapaneseNames));

  return {
    gender: options.gender,
    name: name.join(' '),
    surname: name[0],
    firstName: name[1]
  };
};
//# sourceMappingURL=index.js.map