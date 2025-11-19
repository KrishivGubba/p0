import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// add this:
export default defineConfig({
  plugins: [react()],
  base: '/p0/',
})
