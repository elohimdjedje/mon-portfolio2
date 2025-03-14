import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://elohimdjedje.github.io',
  base: 'moi2',
  trailingSlash: "always",
  integrations: [tailwind()],
});