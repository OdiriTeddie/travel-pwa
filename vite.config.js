import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugin = {
  registerType: "prompt",
  includeAssests: ["favicon.ico", "apple-touc-icon.png", "masked-icon.svg"],
  manifest: {
    name: "Travel App",
    short_name: "react-vite-app",
    description: "I am a simple travel app",
    icons: [
      {
        src: "/vite.svg",
        sizes: "192x192",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/vite.svg",
        sizes: "512x512",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/vite.svg",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },
      {
        src: "/vite.svg",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    theme_color: "#181818",
    background_color: "#e0cc3b",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
});
