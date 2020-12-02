const {
    wxsLibName,
    genAutoIncreaseTplFn,
    defaultValFn,
} = require('../utils/config')
const tagMap = require('./tag-attributes')
const {
  camelCase,
} = require('../utils')

const supportAttrName = [
  'id',
  'class',
  'style',
  'bindtap',
  'value',
  'src',
]

const autoIncreaseFn = `${wxsLibName}.${genAutoIncreaseTplFn}`
const defFn = `${wxsLibName}.${defaultValFn}`

const getAttr = (tag, id) => {
  let result = ''

  const _config = tagMap[tag]

  Object.keys(_config)
    .forEach(attrName => {
      if (supportAttrName.includes(attrName)) {
        const attrValue = _config[attrName]

        const camelName = camelCase(attrName)
        const keepPureValue = attrValue.replace(/(^['"]|['"]$)/g, '')
        const exprValue = `{{${defFn}(node['${camelName}'], '${keepPureValue}')}}`
        const nextLine = id === 1 ? '\n    ' : ''
        result += `${nextLine}${attrName}="${exprValue}" `
      }
    })

  return result
}


const tags = {
    base: `
<template name="base">
  <block wx:for="{{root.children}}" wx:key="index">
    <template is="{{${autoIncreaseFn}(item.tagName)}}" data="{{node: item}}" />
  </block>  
</template>`,

    others: Object.keys(tagMap).reduce((config, tagName) => {
      config[tagName] = (id) => `
<template name="${tagName}${id}">
  <${tagName} ${getAttr(tagName, id)}>
    {{node.value}}
    <block wx:for="{{node.children}}" wx:key="index">
      <template is="{{${autoIncreaseFn}(item.tagName)}}" data="{{node: item}}" />
    </block>
  </${tagName}>
</template>
`
      return config
    }, {})
}

module.exports = tags