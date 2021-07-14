require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteTitle: "AVIILA Apparel",
    siteTitleDefault: "AVIILA Apparel",
    siteUrl: "https://aviila.com",
    hrefLang: "en",
    siteDescription:
      "The online store for miami-based men's activewear, athleisure, and lifestyle apparel company, AVIILA. AVIILA provides men with quality shorts, shirts, joggers, and pullovers.",
    siteImage: "/default-og-image.jpg",
    twitter: "@aviila_apparel",
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ["collections"],
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        // name: `GatsbyJS`,
        // short_name: `GatsbyJS`,
        // start_url: `/`,
        // background_color: `#f7f0eb`,
        // theme_color: `#a2466c`,
        // display: `standalone`,
        icon: `src/images/icon.svg`,
      },
    },

    "gatsby-plugin-gatsby-cloud",
    // Add your Google Analytics ID to the .env file to enable
    // Otherwise, this plugin can be removed
    process.env.GOOGLE_ANALYTICS_ID && {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
  ].filter(Boolean),
}
