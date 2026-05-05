// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    vite: {
		plugins: [tailwindcss()],
    },

    site: 'https://bavarianprayoga.github.io',
    adapter: cloudflare()
});