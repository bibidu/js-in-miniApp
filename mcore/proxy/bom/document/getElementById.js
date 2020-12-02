const { traverse } = require('./inner/traverseSelector')

module.exports = function getElementById(id) {
  let result
  traverse({
    id(path) {
      if (path.node.id === id) {
        result = path
        path.stop()
      }
    }
  })
  return result
}
