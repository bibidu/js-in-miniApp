const fs = require('fs')
const path = require('path')

exports.removeNextLine = (str) => str.replace(/^\r\n/, '')

exports.output = (path, content) => fs.writeFileSync(path, content, 'utf8')

exports.read = (path) => fs.readFileSync(path, 'utf8')

exports.camelCase = str => str.replace(/(\-[a-z])/, (_, $1) => $1.slice(1).toUpperCase())

exports.createTemplateAnnotation = (tagName) => ({
    startAnno: `\n<!-- ================== ${tagName} start ================== -->`,
    endAnno: `\n<!-- ================== ${tagName} end ================== -->`,
})