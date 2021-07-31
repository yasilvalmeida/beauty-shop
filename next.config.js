module.exports = {
  env: {
    PLENTY_MARKET_API_URL: process.env.PLENTY_MARKET_API_URL,
    PLENTY_MARKET_ID: process.env.PLENTY_MARKET_ID,
    PLENTY_MARKET_CUSTOMER_ID: process.env.PLENTY_MARKET_CUSTOMER_ID,
    PLENTY_MARKET_CONTACT_TYPE_ID: process.env.PLENTY_MARKET_CONTACT_TYPE_ID,
    PLENTY_MARKET_CONTACT_REFERRER_ID:
      process.env.PLENTY_MARKET_CONTACT_REFERRER_ID,
    PLENTY_MARKET_CONTACT_CLASS_ID: process.env.PLENTY_MARKET_CONTACT_CLASS_ID,
    PLENTY_MARKET_USER_ID: process.env.PLENTY_MARKET_USER_ID,
    PLENTY_MARKET_FOLDER_ID: process.env.PLENTY_MARKET_FOLDER_ID,
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