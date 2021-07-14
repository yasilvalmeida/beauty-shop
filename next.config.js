module.exports = {
  env: {
    PLENTY_MARKET_API_URL: process.env.PLENTY_MARKET_API_URL,
    PLENTY_MARKET_USERNAME: process.env.PLENTY_MARKET_USERNAME,
    PLENTY_MARKET_PASSWORD: process.env.PLENTY_MARKET_PASSWORD,
  },
  images: {
    domains: ["ik.imagekit.io"],
  },
  async rewrites() {
    return [
      {
        source: "/checkout/:id",
        destination: "/checkout/:id", // Matched parameters can be used in the destination
      },
      {
        source: "/konto/:id",
        destination: "/konto/:id", // Matched parameters can be used in the destination
      },
      {
        source: "/products/:id",
        destination: "/products/:id", // Matched parameters can be used in the destination
      },
      {
        source: "/magazinartikelone/:id",
        destination: "/magazinartikelone/:id", // Matched parameters can be used in the destination
      },
    ];
  },
};