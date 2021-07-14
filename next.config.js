module.exports = {
  env: {
    PLENTY_MARKET_API_URL: "https://www.dasparfum-beauty.de/rest",
    PLENTY_MARKET_USERNAME: "API-Webshop",
    PLENTY_MARKET_PASSWORD: "Developer2020!!",
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