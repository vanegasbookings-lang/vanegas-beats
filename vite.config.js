import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['debtor-quill-acorn.ngrok-free.dev', 'localhost']
  }
})