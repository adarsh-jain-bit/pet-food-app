/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const nextConfig = {
  images: {
    domains: ['www.petsy.online'],
  },

  transpilePackages: ['mui-tel-input'],
    webpack: (config, { isServer }) => {
        config.resolve.alias['@component'] = path.resolve(__dirname, 'src/components');
        return config;
      }
      ,
      compiler: {
        styledComponents: true,
      },
};


export default nextConfig;
