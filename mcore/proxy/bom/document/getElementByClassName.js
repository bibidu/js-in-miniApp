const { traverse } = require('./inner/traverseSelector')

module.exports = function getElementByClassName(clazz) {
  const nodes = []
  traverse({
    class(path) {
      if (path.node.class === clazz) {
        nodes.push(path)
      }
    }
  })
  return nodes
}