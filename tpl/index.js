const {
    maxLength,
    wxsLibName,
    tplDist,
    tplUtilDist,
} = require('./tplConfig')
const {
    base,
    view,
    text,
} = require('./tpl')
const {
    read,
    output,
    removeNextLine,
} = require('../utils')



generateHtml()
generateUtil()

function generateHtml() {
    const utilString = `<wxs module="${wxsLibName}" src="./utils.wxs" />\n`

    let tpls = utilString + removeNextLine(base)
    ;[
        view,
        text,
    ].forEach(tag => {
        tpls += `\n<!-- ================== ${tag.name} start ================== -->`
        Array.from({ length: maxLength }, (_, idx) => {
            tpls += tag(idx + 1)
        })
        tpls += `<!-- ================== ${tag.name} start ================== -->\n`
    })
    output(tplDist, tpls)
}

function generateUtil() {
    const content = read('./tpl/utils.js')
    output(tplUtilDist, content)
}