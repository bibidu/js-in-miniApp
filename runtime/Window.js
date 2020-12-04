const Window = {
  navigator: {
    userAgent: {
      toLowerCase() {
        return "mozilla/5.0 (macintosh; intel mac os x 10_15_5) applewebkit/537.36 (khtml, like gecko) chrome/86.0.4240.193 safari/537.36 edg/86.0.622.68"
      }
    }
  },
  _events: {},
  addEventListener(type, fn) {
    if (!this._events[type]) {
      this._events[type] = []
    }
    this._events[type].push(fn)
  },
  dispatchEvent(event) {
    if (event && event.type) {
      ;(Window._events[event.type] || []).forEach(fn => fn(event))
    }
  },
  Event: class Event {
    constructor(type) {
      this.bubbles = false
      this.cancelBubble = false
      this.cancelable = false
      this.composed = false
      this.currentTarget = null
      this.defaultPrevented = false
      this.eventPhase = 0
      this.isTrusted = false
      this.path = []
      this.returnValue = true
      this.srcElement = null
      this.target = null
      this.timeStamp = +new Date()
      this.type = type
    }
  }
}

module.exports = Window