const MComponent = require('../../../MComponent/index')

module.exports = function createElement(tagName) {
  return new MComponent({
    tagName,
  })
}