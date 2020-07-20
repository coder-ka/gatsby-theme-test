const package = require("./package.json")

module.exports = options => ({
    plugins: [
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [
                    require("tailwindcss"),
                    require(`@fullhuman/postcss-purgecss`)({
                        content: [
                            `src/**/*.js`,
                            `src/**/*.ts`,
                            `src/**/*.jsx`,
                            `src/**/*.tsx`,
                            `node_modules/${package.name}/src/**/*.js`,
                            `node_modules/${package.name}/src/**/*.ts`,
                            `node_modules/${package.name}/src/**/*.jsx`,
                            `node_modules/${package.name}/src/**/*.tsx`,
                            `../node_modules/${package.name}/src/**/*.js`,
                            `../node_modules/${package.name}/src/**/*.ts`,
                            `../node_modules/${package.name}/src/**/*.jsx`,
                            `../node_modules/${package.name}/src/**/*.tsx`,
                        ],
                        defaultExtractor: content => {
                            // Capture as liberally as possible, including things like `h-(screen-1.5)`
                            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

                            // Capture classes within other delimiters like .block(class="w-1/2") in Pug
                            const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

                            return broadMatches.concat(innerMatches)
                        }
                    }),
                    require(`cssnano`)({
                        preset: `default`,
                    })
                ]
            }
        },
    ],
})
