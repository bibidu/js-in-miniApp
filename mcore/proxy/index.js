const {
  Event: $event,
  addEventListener,
  dispatchEvent,
} = require('./bom/Event')
const $document = require('./bom/document/index')

/**
 * 可直接执行，不需要使用 window.
 */
const fakeWindow = {
  document: $document,
  Event: $event,
  addEventListener,
  dispatchEvent,
}

global.window = {
  ...fakeWindow,
}

Object.assign(global, fakeWindow)