"use strict";
const surnames = require('./lib/surnames');
const maleNames = require('./lib/male-names');
const femaleNames = require('./lib/female-names');

function getRandomIndex(l) {
	return Math.floor(Math.random() * l);
}

module.exports = {
	MaleJapaneseName: function () {
		return [
			surnames[getRandomIndex(surnames.length)],
			maleNames[getRandomIndex(maleNames.length)]
		].join(" ");
	},
	FemaleJapaneseName: function () {
		return [
			surnames[getRandomIndex(surnames.length)],
			femaleNames[getRandomIndex(femaleNames.length)]
		].join(" ");
	}
};
