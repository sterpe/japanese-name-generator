#!/usr/bin/env node

var path = require('path')
var fs = require('fs')
var argv = require('minimist')(process.argv.slice(2), {
  boolean: ['help', 'version'],
  string: ['gender'],
  alias: {
    'g': 'gender',
    'h': 'help',
    'v': 'version'
  }
})
if (argv.version) {
  console.log(require('../package.json').version)
  process.exit(0)
}
if (argv.help) {
  var command = path.basename(process.argv[1])
  var usage = path.join(__dirname, './help.txt')
  var text = fs.readFileSync(usage, 'utf-8')
    .replace(/\$0/g, command)
    .trim() + '\n'
  console.log(text)
  process.exit(0)
}
console.log(require('../dist')({
  gender: argv.gender
}).name)
