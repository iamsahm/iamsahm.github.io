// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://samholiday.co.uk',
  output: 'static',

  vite: {
    build: {
      // Emit every script as a file instead of inlining it into the HTML.
      // Astro inlines small module scripts by default, which would need
      // script-src 'unsafe-inline' to run under the CSP in
      // deploy/samholiday.caddy. Externalising them keeps that 'self'.
      assetsInlineLimit: 0,
    },
  },
});
