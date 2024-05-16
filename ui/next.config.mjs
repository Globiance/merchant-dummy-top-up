/** @type {import('next').NextConfig} */

import path from "path";

const nextConfig = {
  output: 'export',
  sassOptions: {
    includePaths: [path.join(".", "styles")],
  },
};

export default nextConfig;
