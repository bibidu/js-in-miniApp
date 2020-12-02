const { traverse } = require('./inner/traverseSelector')

module.exports = function getElementByTagName(tagName) {
  const nodes = []
  traverse({
    tagName(path) {
      if (path.node.tagName === tagName) {
        nodes.push(path)
      }
    }
  })
  return nodes
}