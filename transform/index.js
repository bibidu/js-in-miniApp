const transform = require('../utils/jsx-transform')
const {
    jsxToTemplateInterface,
} = require('../interface/utils')
const {
    rootDist,
} = require('../utils/config')
const {
    output
} = require('../utils')

const html = `
    <div id="app">
        123
        <div className="title">title</div>
        <button onClick="clickme">toggle</button>
        <input value="..." />
        {
            title ? <div>title</div> : <div>no title</div>
        }
    </div>
`

const jsxHtml = transform(html)
console.log(jsxHtml);
const buildedTemplate = jsxToTemplateInterface(jsxHtml)
const formatTemplate = JSON.stringify(buildedTemplate, null, 2)

output(rootDist, `module.exports = ${formatTemplate}`)


