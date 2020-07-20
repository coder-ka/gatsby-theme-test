const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
    theme: {
        extend: {
            colors: {
                "primary": {
                    "900": defaultTheme.colors.blue["900"],
                    "800": defaultTheme.colors.blue["800"],
                    "700": defaultTheme.colors.blue["700"],
                    "600": defaultTheme.colors.blue["600"],
                    "500": defaultTheme.colors.blue["500"],
                    "400": defaultTheme.colors.blue["400"],
                    "300": defaultTheme.colors.blue["300"],
                    "200": defaultTheme.colors.blue["200"],
                    "100": defaultTheme.colors.blue["100"],
                },
                "accent": {
                    "900": defaultTheme.colors.red["900"],
                    "800": defaultTheme.colors.red["800"],
                    "700": defaultTheme.colors.red["700"],
                    "600": defaultTheme.colors.red["600"],
                    "500": defaultTheme.colors.red["500"],
                    "400": defaultTheme.colors.red["400"],
                    "300": defaultTheme.colors.red["300"],
                    "200": defaultTheme.colors.red["200"],
                    "100": defaultTheme.colors.red["100"],
                }
            }
        }
    },
    variants: {},
    plugins: [],
}