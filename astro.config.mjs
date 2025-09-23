import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  cacheDir: './.astro',
  integrations: [react()],
  vite: {
    cacheDir: './.vite',
  },
});
