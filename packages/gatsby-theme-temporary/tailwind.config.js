const defaultTheme = require("tailwindcss/defaultTheme")
const themePackageDir = require("./themePackageDir")

const purge = [
    `src/**/*.js`,
    `src/**/*.ts`,
    `src/**/*.jsx`,
    `src/**/*.tsx`,
    `${themePackageDir}/src/**/*.js`,
    `${themePackageDir}/src/**/*.ts`,
    `${themePackageDir}/src/**/*.jsx`,
    `${themePackageDir}/src/**/*.tsx`,
]

module.exports.purge = purge

module.exports = {
    purge,
    theme: {
        extend: {
            colors: {
                "primary": {
                    "900": defaultTheme.colors.teal["900"],
                    "800": defaultTheme.colors.teal["800"],
                    "700": defaultTheme.colors.teal["700"],
                    "600": defaultTheme.colors.teal["600"],
                    "500": defaultTheme.colors.teal["500"],
                    "400": defaultTheme.colors.teal["400"],
                    "300": defaultTheme.colors.teal["300"],
                    "200": defaultTheme.colors.teal["200"],
                    "100": defaultTheme.colors.teal["100"],
                },
                "secondary": {
                    "900": defaultTheme.colors.indigo["900"],
                    "800": defaultTheme.colors.indigo["800"],
                    "700": defaultTheme.colors.indigo["700"],
                    "600": defaultTheme.colors.indigo["600"],
                    "500": defaultTheme.colors.indigo["500"],
                    "400": defaultTheme.colors.indigo["400"],
                    "300": defaultTheme.colors.indigo["300"],
                    "200": defaultTheme.colors.indigo["200"],
                    "100": defaultTheme.colors.indigo["100"],
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
                },
                "muted": {
                    "900": defaultTheme.colors.gray["900"],
                    "800": defaultTheme.colors.gray["800"],
                    "700": defaultTheme.colors.gray["700"],
                    "600": defaultTheme.colors.gray["600"],
                    "500": defaultTheme.colors.gray["500"],
                    "400": defaultTheme.colors.gray["400"],
                    "300": defaultTheme.colors.gray["300"],
                    "200": defaultTheme.colors.gray["200"],
                    "100": defaultTheme.colors.gray["100"],
                }
            }
        }
    },
    variants: {},
    plugins: [],
}