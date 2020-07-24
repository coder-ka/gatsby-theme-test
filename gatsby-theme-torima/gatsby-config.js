const path = require("path")

module.exports = options => ({
    siteMetadata: {
        title: "hoge",
        subTitle: "hoge"
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
