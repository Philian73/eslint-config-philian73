import reactRefresh from 'eslint-plugin-react-refresh'
import next from '@next/eslint-plugin-next'

import {defineConfig} from 'eslint/config'

export default defineConfig([
   {
      files: ['**/*.{js,ts,jsx,tsx,cjs,cts,mjs,mts}'],
      plugins: {
         '@next/next': next,
      },
      extends: [
         reactRefresh.configs.next,
      ],
      rules: {
         ...next.configs.recommended.rules,
      }
   }
])
