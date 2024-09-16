const withVideos = require("next-videos");

module.exports = withVideos();  

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "ap-south-1.graphassets.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "aceternity.com",
        port: "",
      },
    ],
  },
};
//aceternity.com
