import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'http://alonso91cl.github.io/screen-recorder/',
  base: 'screen-recorder',
  output: 'static',
  outDir: 'dist'
});