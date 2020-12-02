const MComponent = require('../../../../MComponent/index')

let root = {}

function initRoot(_root) {
  root = _root
}

function traverse(visitors) {
  let stopTraverse = false
  const stacks = root.children

  while (stacks.length && !stopTraverse) {
    const head = stacks.shift()

    const validAttrs = ['class', 'id', 'tagName']
    for (let nodeType of validAttrs) {
      console.log(`nodeType ${nodeType}`)
      if (visitors[nodeType] && head[nodeType]) {
        const ins = new MComponent(head)
        ins.stop = () => {
          stopTraverse = true
        }
        visitors[nodeType](ins)
      }
    }

    if (head.children && head.children.length) {
      stacks.push(...head.children)
    }
  }
}

module.exports = {
  initRoot,
  traverse,
}