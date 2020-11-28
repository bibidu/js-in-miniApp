const {
    wxsLibName,
    genAutoIncreaseTplFn,
} = require('./tplConfig')

const autoIncreaseFn = `${wxsLibName}.${genAutoIncreaseTplFn}`

const base = `
<template name="base">
  <block wx:for="{{root.children}}" wx:key="index">
    <template is="{{${autoIncreaseFn}(item.tpl)}}" data="{{node: item}}" />
  </block>  
</template>
`

const view = (id) => `
<template name="view${id}">
  <view>
    {{node.value}}
    <block wx:for="{{node.children}}" wx:key="index">
      <template is="{{${autoIncreaseFn}(item.tpl)}}" data="{{node: item}}" />
    </block>
  </view>
</template>
`

const text = (id) => `
<template name="text${id}">
  <block>{{node.value}}</block>
</template>
`

module.exports = {
    base,
    view,
    text,
}