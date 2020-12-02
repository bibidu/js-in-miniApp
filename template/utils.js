const {
  genAutoIncreaseTplFn,
  defaultValFn,
} = require('../utils/config')

exports.create = () => {
  return `
var tplUse = {

}

module.exports = {
  ${genAutoIncreaseTplFn}: function(name) {
    if (!tplUse[name]) {
      tplUse[name] = 0
    }
    tplUse[name]++

    return name + tplUse[name]
  },

  ${defaultValFn}: function(currentValue, defaultValue) {
    var isUndef = typeof currentValue === 'undefined' || currentValue === 'undefined'
    console.log(currentValue)
    return isUndef ? defaultValue : currentValue
  }
}
`
}
