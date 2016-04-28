# japanese-name-generator

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

[![Japanese Name Generator](http://drrichswier.com/wp-content/uploads/japanese-people-1030x641.jpg)]

## installation
```
npm i --S japanese-name-generator
```

## Usage
```javascript
var generate = require('japanese-name-generator')

var japanesePerson = generate()

japanesePerson.gender // 'female'
japanesePerson.name // 'Matsushima Rinako'
japanesePerson.surname // 'Matsushima'
japanesePerson.firstName // 'Rinako'

// Alternately, you may specify the gender, ('male' | 'female') as an option:

var japaneseMan = generate({ gender: 'male' })
```

## Tests
Run the unit tests with `make`.
```
make test
```
