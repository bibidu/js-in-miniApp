const babel = require('@babel/core')

module.exports = function transform(str) {
    return babel.transform(str, {
        plugins: ['transform-vue-jsx']
    }).code
}