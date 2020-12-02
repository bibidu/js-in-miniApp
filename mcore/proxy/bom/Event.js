function Event(type) {
  return {
    bubbles: false,
    cancelBubble: false,
    cancelable: false,
    composed: false,
    currentTarget: null,
    defaultPrevented: false,
    eventPhase: 0,
    isTrusted: false,
    path: [],
    returnValue: true,
    srcElement: null,
    target: null,
    timeStamp: +new Date(),
    type,
  }
}

const eventMap = {}
function addEventListener(type, fn) {
  if (!eventMap[type]) {
    eventMap[type] = []
  }
  eventMap[type].push(fn)
}

function dispatchEvent(event, params) {
  if (event.type && eventMap[event.type]) {
    eventMap[event.type].forEach(fn => fn(event))
  }
}

module.exports = {
  Event,
  addEventListener,
  dispatchEvent,
}