module.exports = function LogCreator(prefix) {
  return {
    // log: (...args) => console.log(`[${prefix}] `, ...args)
    log: (...args) => {}
  }
}