// astro.config.mjs
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import path from 'path';

export default defineConfig({
  build: {
    // Default output directory for Astro builds
    outDir: path.join('dist', 'entry.pages').replace(/\\/g, '/'),
  },
  output: 'server',
  adapter: vercel(),
});
