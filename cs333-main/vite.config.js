import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // On your laptop, anything the front end fetches from /api/ is sent to the
    // back end on port 3000, with the /api taken off (/api/abc -> /abc).
    // On your server, nginx's location /api/ block does the same job.
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
