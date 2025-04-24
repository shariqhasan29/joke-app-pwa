import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt", "pwa-icon.png"],
      manifest: {
        name: "Dad Joke App",
        short_name: "DadJokes",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#4a90e2",
        icons: [
          {
            src: "pwa-icon.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/icanhazdadjoke\.com\//,
            handler: "NetworkFirst",
            options: {
              cacheName: "joke-cache",
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 24 * 60 * 60, // 1 day
              },
            },
          },
        ],
      },
    }),
  ],
});
