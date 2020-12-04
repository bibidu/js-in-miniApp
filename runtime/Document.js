const {
  addView,
  Element,
} = require('./Element') // 元素节点
const LogCreator = require('./LogUtils') // 日志
const log = LogCreator('document').log //

function proxify(element) {
  return new Proxy(element, {
    set(obj, key, newValue) {
      
      obj[key] = newValue

      if (key === 'textContent') {
        element.setAttribute('value', newValue)
        element._refreshView()
      }

      return true
    },
  })
}

const Document = {
  querySelector(el) {
    log('querySelector', el)
    return Document.body.querySelector(el)
  },
  createElement(tagName, isRoot) {
    log('createElement', tagName)

    return proxify(new Element(tagName, isRoot))
  },
  appendChild(node) {
    log('appendChild')
    return Document.body.appendChild(node)
  },
  createTextNode(value) {
    log('createTextNode')
    const ele = new Element('span')
    ele.setAttribute('value', value)
    return proxify(ele)
  },
  createElementNS() {
    log('createElementNS', 'no 实现')
  },
  createComment() {
    log('createElementNS', 'no 实现')
  },
}

const body = Document.createElement('div', true)
Document.body = body
addView(body.getAttribute('uid'), body)

module.exports = Document