import reactRefresh from 'eslint-plugin-react-refresh'

import { defineConfig } from 'eslint/config'

export default defineConfig([
   {
      files: ['**/*.{js,ts,jsx,tsx,cjs,cts,mjs,mts}'],
      extends: [
         reactRefresh.configs.recommended,
      ]
   }
])
