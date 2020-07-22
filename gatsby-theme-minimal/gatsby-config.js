const path = require("path")
const tailwindcss = require("tailwindcss")
const { exists } = require("./util")
const themePackageDir = require("./themePackageDir")

module.exports = options => ({
    siteMetadata: {
        navigations: [{
            title: "hoge",
            href: "/"
        }]
    },
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
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `images`),
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
    ],
})
