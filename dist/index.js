'use strict';

var Random = require('random-js');
var mt = Random.engines.mt19937().autoSeed();
var japaneseSurnames = require('../data/names/surnames');
var maleJapaneseNames = require('../data/names/male');
var femaleJapaneseNames = require('../data/names/female');

function randomOf(array) {
  return array[Random.integer(0, array.length - 1)(mt)];
}

module.exports = function (options) {
  var gender = ['male', 'female'];
  var name = [];

  options = options || {};
  options.gender = options.gender || randomOf(gender);

  name.push(randomOf(japaneseSurnames));
  name.push(options.gender === 'male' ? randomOf(maleJapaneseNames) : randomOf(femaleJapaneseNames));
  return {
    gender: options.gender,
    name: name[1],
    surname: name[0],
    fullName: name.join(' ')
  };
};
//# sourceMappingURL=index.js.map