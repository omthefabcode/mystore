module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "shopify",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        storeUrl: "omgatsbyjs.myshopify.com",
        password: "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",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
