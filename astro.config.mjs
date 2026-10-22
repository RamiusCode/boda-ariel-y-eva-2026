// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Dirección pública: WhatsApp necesita el link completo de la miniatura
  site: 'https://boda-ariel-y-eva-2026.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  }
});