import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://romainmiazga.com/',

  // On met un slash pour dire "à la racine"
  base: '/',

  integrations: [sitemap()]
});