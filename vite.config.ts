import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { splitVendorChunkPlugin } from 'vite';
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  resolve: {
    alias: {
      "pages": resolve(__dirname, "src/pages"),
      "styles": resolve(__dirname, "src/styles"),
      "components": resolve(__dirname, "src/components"),
      "hooks": resolve(__dirname, "src/hooks"),
    },
  },
})
