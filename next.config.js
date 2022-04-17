/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1Ijoid2Fkb2Z0aGVqYWgiLCJhIjoiY2wyM25iN29qMDM1YjNqcW10MWFlajVvdCJ9.y-FKnPtjnTpSp9STK-KolA",
  },
};

module.exports = nextConfig;
