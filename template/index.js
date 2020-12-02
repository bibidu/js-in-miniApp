const {
    maxLength,
    wxsLibName,
    tplDist,
    tplUtilDist,
} = require('../utils/config')
const {
    base,
    others: otherTags,
} = require('./tag-elements')
const { create: createOutputUtil } = require('./utils')
const {
    output,
    removeNextLine,
    createTemplateAnnotation,
} = require('../utils')

generateHtml()
generateUtil()

function generateHtml() {
    const utilString = `<wxs module="${wxsLibName}" src="./utils.wxs" />\n`

    let tpls = utilString + removeNextLine(base)
    Object.keys(otherTags).forEach(tag => {
        const createTag = otherTags[tag]

        const { startAnno, endAnno } = createTemplateAnnotation(tag)

        tpls += startAnno
        Array.from({ length: maxLength }, (_, idx) => {
            tpls += createTag(idx + 1)
        })
        tpls += endAnno
    })
    output(tplDist, tpls)
}

function generateUtil() {
    const content = createOutputUtil()
    output(tplUtilDist, content)
}