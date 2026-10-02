// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://samholiday.co.uk',
  output: 'static',

  vite: {
    build: {
      // Astro inlines small module scripts into the HTML by default, which the
      // CSP in deploy/samholiday.caddy blocks. Emitting them as files keeps
      // that policy's script-src at 'self'.
      assetsInlineLimit: 0,
    },
  },
});
