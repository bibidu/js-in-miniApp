function convert(element) {
  const { 
    uid, 
    id, 
    class: className, 
    tagName, 
    value, 
    childNodes 
  } = element
  const info = {
    uid,
    id,
    class: className,
    tagName: transformTag(tagName),
    value,
    children: childNodes.map(child => convert(child)),
  }
  if (value) {
    info.value = value
  }
  
  return info
}

function transformTag(tagName) {
  if (tagName === 'input') {
    return tagName
  }

  return 'view'
}

module.exports = {
  convert,
}