const fs = require('fs')
const path = require('path')

exports.removeNextLine = (str) => str.replace(/^\r\n/, '')

exports.output = (path, content) => fs.writeFileSync(path, content, 'utf8')

exports.read = (path) => fs.readFileSync(path, 'utf8')