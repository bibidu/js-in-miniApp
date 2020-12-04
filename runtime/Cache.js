const cache = {}

function setCache(k, v) {
  cache[k] = v
}

function getCache(k) {
  const value = cache[k]
  try {
    return JSON.parse(value)
  } catch (error) {
    return value
  }
}

function clearCache(k) {
  if (cache[k]) {
    delete cache[k]
  }
}

module.exports = {
  setCache,
  getCache,
  clearCache,
}