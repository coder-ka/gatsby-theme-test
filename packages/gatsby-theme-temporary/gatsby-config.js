const path = require("path");

module.exports = (options) => {
  const theme = options.theme || "simple";

  const title = options.title;
  if (!title) throw new Error("Specify title of your page.");

  const subTitle = options.subTitle;
  if (!subTitle) throw new Error("Specify sub title of your page.");

  const appeals = options.appeals || null;
  const released = options.released || false;

  const passwordRequirement = options.passwordRequirement || {
      minLength: 8,
      maxLength: 100,
      mustHaveUppercase: true,
      mustHaveLowercase: true,
      mustHaveDigits: true,
      mustNotHaveSpaces: true,
      blacklist: []
  }

  if (passwordRequirement.blacklist.length === 0) {
    passwordRequirement.blacklist.push("")
  }

  return {
    siteMetadata: {
      theme,
      title,
      subTitle,
      appeals,
      released,
      passwordRequirement
    },
    plugins: [
      {
        resolve: `gatsby-plugin-postcss`,
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
  };
};
