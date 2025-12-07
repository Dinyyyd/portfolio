import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // 🔴 IMPORTANT for GitHub Pages (must start AND end with a slash)
  base: "/portfolio/",
  server: {
    port: 5173,
    host: "0.0.0.0", // Allow external connections for mobile testing
    strictPort: false
  }
});
