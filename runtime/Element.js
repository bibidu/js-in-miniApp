const LogCreator = require('./LogUtils')
const log = LogCreator('Element').log
const Window = require('./Window')
const Cache = require('./Cache')
const { setCache, getCache } = require('./Cache')

// 生成自增ID
let uid = 0
const genID = () => `uid${++uid}`

// ID对应的节点 是否存在 页面中
const inViewId = {}
const addView = (id, node) => {
  inViewId[id] = node
}
const removeView = (id) => {
  delete inViewId[id]
}
const existView = (id) => {
  return Boolean(inViewId[id])
}


// 是否需要刷新页面
let needRefresh = true
const allowRefresh = () => {
  needRefresh = true
}
const stopRefresh = () => {
  needRefresh = false
}


// Element
class Element {
  constructor(tagName, isRoot) {
    log('init', tagName)
    
    this.isRoot = Boolean(isRoot)
    this.uid = isRoot ? '___root___' : genID()
    this.tagName = tagName
    this.elm = this
    this.childNodes = []
  }

  _inView() {
    return existView(this.uid)
  }

  _refreshView() {
    const key = '_refreshView'
    if (getCache(key)) {
      const { dispatchEvent, Event } = Window
      const event = new Event(key)
      event.value = this
      dispatchEvent(event)
    } else {
      setCache(key, this)
    }
  }

  _updateSetStatePath(root, beforePath = 'root', count = 0) {
    if (root && !root.setStatePath && count++ < 5) {
      root.setAttribute('setStatePath', beforePath)
      ;[root.childNodes || []].forEach((child, idx) => {
        // unknown reason
        if (Array.isArray(child)) {
          child = child[0]
        }
        this._updateSetStatePath(child, beforePath + `.children[${idx}]`, count)
      })
    }
  }

  _splitSelector(selector) {
    const firstChar = selector.charAt(0)
    let type, value
    if (firstChar === '#') {
      type = 'id'
      value = selector.slice(1)
    } else if (firstChar === '.') {
      type = 'class'
      value = selector.slice(1)
    } else {
      type = 'tagName'
      value = selector
    }
    return { type, value }
  }

  querySelector(selector) {
    log('querySelector', selector)
    const { type, value } = this._splitSelector(selector)

    let stacks = this.childNodes
    const results = []
    while (stacks.length) {
      const node = stacks.shift()
      if (node.getAttribute(type) === value) {
        results.push(node)
      }
    }
    if (type === 'id') {
      return results[0]
    }
    return results
  }

  setAttribute(key, value) {
    this[key] = value
  }

  getAttribute(key) {
    return this[key]
  }

  cloneNode(tagName) {
    log('cloneNode', tagName)
    return new Element(tagName)
  }

  removeChild(node) {
    log('removeChild', node)

  }

  appendChild(node) {
    if (!(node instanceof Element)) {
      return log('error', 'no instanceof ', node)
    }

    this.setAttribute('childNodes', this.childNodes.concat(node))
    node.setAttribute('parentNode', this)

    if (needRefresh && this._inView()) {
      this._updateSetStatePath(this)
      this._refreshView()
    }
    return true
  }

  insertBefore(newNode, node) {

    console.log(`newNode`,newNode, node)
    // const nodeIndex = this.childNodes.indexOf(node)
    // console.log(`this`, this);
    // this.childNodes.splice(nodeIndex, 0, newNode)
    // newNode.setAttribute('parentNode', this)

    // if (needRefresh && this._inView) {
    //   this._updateSetStatePath(this)
    //   this._refreshView()
    // }

    return true
  }

}

module.exports = {
  addView,
  removeView,
  allowRefresh,
  stopRefresh,
  Element,
}