import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_CLIENT_ID':JSON.stringify(env.REACT_APP_CLIENT_ID),
      'process.env.REACT_APP_CLIENT_SECRET':JSON.stringify(env.REACT_APP_CLIENT_SECRET),
      'process.env.REACT_APP_SALESFORCE_USERNAME':JSON.stringify(env.REACT_APP_SALESFORCE_USERNAME),
      'process.env.REACT_APP_SALESFORCE_PASSWORD':JSON.stringify(env.REACT_APP_SALESFORCE_PASSWORD),
      'process.env.REACT_APP_SALESFORCE_SECURITY_TOKEN':JSON.stringify(env.REACT_APP_SALESFORCE_SECURITY_TOKEN),
      'process.env.REACT_APP_SALESFORCE_LOGIN_URL':JSON.stringify(env.REACT_APP_SALESFORCE_LOGIN_URL),
      'process.env.REACT_APP_SALESFORCE_INSTANCE_URL':JSON.stringify(env.REACT_APP_SALESFORCE_INSTANCE_URL)
    },
    plugins: [react()],
  }
})