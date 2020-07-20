const tailwindcss = require("tailwindcss")
const { exists } = require("./util")
const themePackageDir = require("./themePackageDir")

module.exports = options => ({
    plugins: [
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [
                    exists("tailwind.config.js") ? tailwindcss("tailwind.config.js") :
                        exists(`${themePackageDir}/tailwind.config.js`) ? tailwindcss(`${themePackageDir}/tailwind.config.js`) :
                            tailwindcss,
                    require(`cssnano`)({
                        preset: `default`,
                    })
                ]
            }
        },
    ],
})
