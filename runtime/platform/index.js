function getByPlatform(name) {
  return require(`./${name}Render/index`)
}

module.exports = {
  getByPlatform,
}
