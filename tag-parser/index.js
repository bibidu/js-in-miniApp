const fetch = require('node-fetch')
const cheerio = require('cheerio')

const hasChinese = (str) => /[\u4e00-\u9fa5]+/.test(str)

;(async () => {
  const tagInfo = await getAllTagInfo()
  const tags = Object.values(tagInfo).reduce((array, tags) => array.concat(tags), [])

  const tagAttrs = await Promise.all(tags.map(tag => extractAttr(tag)))
  const result = tagAttrs.reduce((map, item) => {
    map[Object.keys(item)[0]] = Object.values(item)[0]
    return map
  }, {})

})()

async function getAllTagInfo() {
  const _indexUrl = 'https://developers.weixin.qq.com/miniprogram/dev/component/'
  const _typeDom = '#docContent h2'

  const tagInfo = {}
  const html = await fetch(_indexUrl).then(res => res.text())
  const $ = cheerio.load(html)

  $(_typeDom).each((_, item) => {
    const type = $(item).attr('id')

    const children = $(item).next().find('tr')
    $(children).each((index, child) => {
      if (index !== 0) {
        if (!tagInfo[type]) {
          tagInfo[type] = []
        }
        $(child).find('a').each((idx, current) => {
          if (idx === 0) {
            const attrName = $(current).text()
            tagInfo[type].push(attrName)
          }
        })
      }
    })
  })

  return tagInfo
}

async function extractAttr(tag) {
  const url = `https://developers.weixin.qq.com/miniprogram/dev/component/${tag}.html`
  const _attrDom = '#docContent .table-wrp'

  const html = await fetch(url).then(res => res.text())
  const $ = cheerio.load(html)

  const result = { [tag]: {} }
  $(_attrDom).each((idx, dom) => {
    if (idx === 0) {
      $(dom).find('tr').each((index, tr) => {
        if (index !== 0) {
          const name = $(tr).find('td').eq(0).text()
          const type = $(tr).find('td').eq(1).text()
          const defValue = $(tr).find('td').eq(2).text()

          const value = getDefaultValue(defValue, type)
          result[tag][name] = value
        }
      })
    }
  })

  return result
}

function getDefaultValue(defValue, type) {
  if (type == 'eventhandle') {
    value = 'eventHandler'
  } else {
    if (defValue.trim()) {
      if (hasChinese(defValue)) {
        value = 'undefined'
      } else {
        value = defValue
      }
    } else {
      value = 'undefined'
    }
  }
  return value
}