const fs = require('fs')

module.exports.exists = path => {
    try {
        fs.statSync(path)

        return true
    } catch(e) {
        if (e.code === "ENOENT") return false

        throw e
    }
}