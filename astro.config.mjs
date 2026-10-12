import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// ASTRO_BASE permite publicar en una subcarpeta de GitHub Pages
// (/muestra-gualtieri-inmobiliaria) o en la raiz. Sin la variable, raiz.
export default defineConfig({
  output: 'static',
  base: process.env.ASTRO_BASE || '/',
  integrations: [tailwind({ applyBaseStyles: false })],
});
