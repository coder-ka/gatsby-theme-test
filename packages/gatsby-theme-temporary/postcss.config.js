const tailwindcss = require("tailwindcss")
const { exists } = require("./util")
const themePackageDir = require("./themePackageDir")

module.exports = {
    plugins: [
        exists("tailwind.config.js") ? tailwindcss("tailwind.config.js") :
            exists(`${themePackageDir}/tailwind.config.js`) ? tailwindcss(`${themePackageDir}/tailwind.config.js`) :
                tailwindcss,
        require(`cssnano`)({
            preset: `default`,
        })
    ]
}