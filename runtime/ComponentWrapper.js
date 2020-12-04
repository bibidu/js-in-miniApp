const Window = require('./Window')
const adapter = require('./platform/index')
const { getCache } = require('./Cache')

let runtime
let context

function ComponentWrapper(config, platform = 'vue2') {
  runtime = adapter.getByPlatform(platform)
  const root = transformByPlatform()
  
  config.data.root = root
  config.onLoad = onLoadInterceptor(config.onLoad)

  return Page(config)
}

/**
 * 转换 JSX 为 小程序树
 * @param {*} root 
 * @param {*} platform 
 */
function transformByPlatform(root = null, platform = 'vue2') {
  const rootData = root || getCache('_refreshView')

  return runtime.convert(rootData)
}

/**
 * 重写 onLoad 方法
 * @param {*} sourceOnload 
 */
function onLoadInterceptor(sourceOnload) {
  sourceOnLoad = sourceOnload || function() {}

  return function(...args) {
    context = this

    // 监听JSX变更
    Window.addEventListener('_refreshView', (_event) => {
      console.log('n');
      const { value } = _event
      const formatValue = transformByPlatform(_event.value)
      const path = value.setStatePath

      context.setData({
        [path]: formatValue
      })

    })

    sourceOnload(...args)
  }
}

module.exports = ComponentWrapper