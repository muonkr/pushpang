import { defineConfig } from '@apps-in-toss/web-framework/config'

export default defineConfig({
  appName: 'pawpush',
  brand: {
    displayName: '꾹꾹팡',
    primaryColor: '#7c3aed',
    icon: 'https://muonkr.github.io/pawpush/icon.png',
  },
  permissions: [],
  web: {
    host: 'localhost',
    port: 5175,
    commands: {
      dev: 'vite --host',
      build: 'vite build',
    },
  },
})
