// @ts-check
import { defineConfig } from 'astro/config';
import { envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://ongunumutyelbasi.github.io',
  base: '/umutyelbasi',
  env: {
    schema: {
      BASE_URL: envField.string({ context: 'client', access: 'public', default: '/' }),
    }
  }
});