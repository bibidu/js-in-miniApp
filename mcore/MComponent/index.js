const {
  Event,
  dispatchEvent,
} = require('../proxy/bom/Event')

class MComponent {
  constructor(node) {
    this.node = node
  }

  setAttribute(key, value) {
    this.node[key] = value
  }

  appendChild(ele) {
    console.log('appendChild', ele);
    if (ele instanceof MComponent) {
      if (!this.node.children || this.node.children.length === 0) {
        this.node.children = []
      }
      this.node.children.push(ele.node)
      this._syncView()
      console.log('ok...');
    }
  }

  _syncView() {
    const event = new Event('w:_updateView')
    event.value = this.node
    dispatchEvent(event)
  }

}
module.exports = MComponent