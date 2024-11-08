import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.VITE_CLIENT_ID':JSON.stringify(env.VITE_CLIENT_ID),
      'process.env.VITE_CLIENT_SECRET':JSON.stringify(env.VITE_CLIENT_SECRET),
      'process.env.VITE_SALESFORCE_USERNAME':JSON.stringify(env.VITE_SALESFORCE_USERNAME),
      'process.env.VITE_SALESFORCE_PASSWORD':JSON.stringify(env.VITE_SALESFORCE_PASSWORD),
      'process.env.VITE_SALESFORCE_SECURITY_TOKEN':JSON.stringify(env.VITE_SALESFORCE_SECURITY_TOKEN),
      'process.env.VITE_SALESFORCE_LOGIN_URL':JSON.stringify(env.VITE_SALESFORCE_LOGIN_URL),
      'process.env.VITE_SALESFORCE_INSTANCE_URL':JSON.stringify(env.VITE_SALESFORCE_INSTANCE_URL)
    },
    plugins: [react()],
    base: 'https://kyanferreira.github.io/AccountOpeningFileUpload_2'
  }
})