import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173,
    open: true,
    host: true,         // Allow external access
    checkHost: false,   // Disable host checking to allow ngrok tunneling
    allowedHosts: ['.ngrok-free.app']
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['@tensorflow/tfjs', '@tensorflow-models/coco-ssd']
        }
      }
    }
  }
});
