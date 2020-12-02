const { initRoot } = require('./inner/traverseSelector')
const getElementById = require('./getElementById')
const getElementByClassName = require('./getElementByClassName')
const getElementByTagName = require('./getElementByTagName')

function querySelector(selector) {
  const firstChar = selector.charAt(0)
  if (firstChar === '.') {
    return getElementByClassName(selector.slice(1))
  } else if (firstChar === '#') {
    return getElementById(selector.slice(1))
  } else {
    return getElementByTagName(selector)
  }
}

module.exports = {
  initRoot,
  querySelector,
}
