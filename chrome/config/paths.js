var path = require('path')
var fs = require('fs')

const projectDirectory = fs.realpathSync(process.cwd())
const resolve = relativePath => path.resolve(projectDirectory, relativePath)

module.exports = {
    assets: resolve('assets'),
    background: resolve('background'),
    backgroundIndex: resolve('background/index.js'),
    config: resolve('config'),
    content: resolve('content'),
    contentIndex: resolve('content/index.js')
}