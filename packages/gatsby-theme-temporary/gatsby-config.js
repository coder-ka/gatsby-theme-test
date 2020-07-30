const path = require("path")

module.exports = options => {
    const theme = options.theme || "simple"

    const title = options.title
    if (!title) throw new Error("Specify title of your page.")

    const subTitle = options.subTitle
    if (!subTitle) throw new Error("Specify sub title of your page.")

    const appeals = options.appeals || null
    const released = options.released || false

    const submitButton = options.submitButton || { caption: "Register" }
    const emailAddressInput = options.emailAddressInput || { 
        placeholder: "Enter your email address.", 
        errorMessageWhenEmpty: "Enter your email address.",
        errorMessageWhenInvalid: "Invalid email address format.",
    }
    const joinWaitlistButton = options.joinWaitlistButton || { caption: "Join the waitlist." }
    const joinWaitlistCompleteMessage = options.joinWaitlistCompleteMessage || "We've sent an email to you! Check it out now!"

    return ({
        siteMetadata: {
            theme,
            title,
            subTitle,
            appeals,
            released,
            submitButton,
            emailAddressInput,
            joinWaitlistButton,
            joinWaitlistCompleteMessage
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
}
