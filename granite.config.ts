import { defineConfig } from '@apps-in-toss/web-framework/config'

export default defineConfig({
  appName: 'pawpush',
  brand: {
    displayName: '꾹꾹팡',
    primaryColor: '#7c3aed',
    icon: 'https://raw.githubusercontent.com/muonkr/pawpush/main/public/icon.png',
  },
  permissions: [],
  webViewProps: {
    type: 'game',
  },
  web: {
    host: 'localhost',
    port: 5175,
    commands: {
      dev: 'vite --host',
      build: 'vite build',
    },
  },
})
