const Document = require('./Document') // document节点
const Window = require('./Window') // window节点
const Element = require('./Element') // 元素节点
const Cache = require('./Cache') //
const ComponentWrapper = require('./ComponentWrapper') //


global.document = Document
global.window = Window

module.exports = {
  Document,
  Window,
  Element,
  Cache,
  ComponentWrapper,
}