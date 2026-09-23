/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "https://vargasjr.dev",
        permanent: false,
      },
      {
        source: "/predictions",
        destination: "/",
        permanent: false,
      },
      {
        source: "/predictions/:year",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
