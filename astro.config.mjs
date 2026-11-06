import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Static, fast, accessible hub for Kitsap Fathers Group.
// See docs/audit.md and docs/compliance-freeze.md for background.
export default defineConfig({
  site: 'https://www.kitsapfathersgroup.org',
  trailingSlash: 'never',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
