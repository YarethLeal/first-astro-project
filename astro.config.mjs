import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://yarethleal-astro-blog.netlify.app/",
  integrations: [react()]
});