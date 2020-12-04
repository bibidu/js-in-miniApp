let _uid = 0
function genId() {
    return 'uid' + _uid++
}

function buildTemplateInterface({
    tagName,
    id,
    class: clazz,
    value,
    children,
}) {
    return {
        _uid: genId(),
        tagName: transformTag(tagName),
        id,
        class: clazz,
        value,
        children,
    }
}

function transformTag(tagName) {
    switch(tagName) {
        case 'div': 
        case 'p': 
            return 'view'
        case 'span': return 'text'
        default: return tagName
    }
}

module.exports = {
    buildTemplateInterface,
    genId,
}