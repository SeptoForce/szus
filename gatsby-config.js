require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

if (process.env.CONTENTFUL_HOST) {
    contentfulConfig.host = process.env.CONTENTFUL_HOST;
    contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
    throw new Error(
        "Contentful spaceId and the access token need to be provided. Received: " +
            JSON.stringify(contentfulConfig)
    );
}

// starter config
module.exports = {
    siteMetadata: {
        title: "Rent A Boat Porat",
        description:
            "Create custom landing pages using Gatsby and Contentful with this Gatsby Starter",
    },
    plugins: [
        {
            resolve: `gatsby-theme-landing-page`,
            options: contentfulConfig,
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Rent A Boat Porat`,
                short_name: `Rent A Boat Porat`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#000`,
                display: `browser`,
                icon: `src/assets/gatsby-monogram.png`,
            },
        },
    ],
};
