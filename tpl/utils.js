var tplUse = {

}

module.exports = {
  tpl: function(name) {
    if (!tplUse[name]) {
      tplUse[name] = 0
    }
    tplUse[name]++

    return name + tplUse[name]
  }
}