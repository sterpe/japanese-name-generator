# japanese-name-generator

![Japanese Name Generator](http://nd06.jxs.cz/033/857/642dda4c84_95676290_o2.jpg)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## installation
```
npm install --save japanese-name-generator
```

## usage
```javascript
var generate = require('japanese-name-generator')

var japanesePerson = generate()

japanesePerson.gender // 'female'
japanesePerson.name // 'Matsushima Rinako'
japanesePerson.surname // 'Matsushima'
japanesePerson.firstName // 'Rinako'

// Gender is random but you may, alternately, generate names of a
// specific gender by passing `options.gender' as either 
// `male' or `female':

var japaneseMale = generate({ gender: 'male' })
var japaneseFemale = generate({ gender: 'female' })
```

## tests
Run the unit tests with `make`.
```
make test
```

## license
`MIT`
