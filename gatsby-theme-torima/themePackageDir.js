const package = require("./package.json")
const { exists } = require("./util")

module.exports = exists(`../${package.name}`) ? `../${package.name}`  // only for development
    : exists(`node_modules/${package.name}`) ? `node_modules/${package.name}` // installed using npm
        : `node_modules/${package.name}` // installed using yarn workspace