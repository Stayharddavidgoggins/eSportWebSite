import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://stayharddavidgoggins.github.io/eSportWebSite/rushn-site/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
