const path = require("path")

module.exports = options => ({
    siteMetadata: {
        navigations: [{
            title: "hoge",
            href: "/"
        }]
    },
    plugins: [
        {
            resolve: `gatsby-plugin-postcss`
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
