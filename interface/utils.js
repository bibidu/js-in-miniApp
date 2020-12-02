const {
    buildTemplateInterface,
} = require('../platform/web/interface')

// {
//     attrs: {
//         id: '',
//         className: 'clazz',
//         value: '',
//         bindtap: 'onTap',
//     },
//     class: '',
//     on: {
//         click: 'onTap',
//     }
// }
const isObject = s => Object.prototype.toString.call(s) === '[object Object]'

function h(tagName, attribute, children) {
    if (!children) {
        if (isObject(attribute)) {
            children = []
        } else {
            children = attribute
            attribute = {}
        }
    }
    children = children.map(child => {
        if (!child._uid) {
            return buildTemplateInterface({
                tagName: 'span',
                value: child,
                children: []
            })
        }
        return child
    })

    const className = attribute.attrs && attribute.attrs.className
    const id = attribute.attrs && attribute.attrs.id
    const value = attribute.attrs && attribute.attrs.value

    return buildTemplateInterface({
        tagName,
        class: className,
        id,
        value,
        children,
    })
}

exports.jsxToTemplateInterface = function(jsxHtml) {
    const title = false

    return {
        children: [eval(jsxHtml)]
    }
}
