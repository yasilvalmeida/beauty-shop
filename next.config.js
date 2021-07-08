module.exports = {
  distDir: "build",
  env: {
    NEXT_PUBLIC_API_URL: "https://207.154.241.233:1337",
    PLENTY_MARKET_API_URL: "https://www.dasparfum-beauty.de/rest",
    PLENTY_MARKET_USERNAME: "API-Webshop",
    PLENTY_MARKET_PASSWORD: "Api-Webshop123!",
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
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};