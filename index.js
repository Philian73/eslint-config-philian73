import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactRefresh from 'eslint-plugin-react-refresh'
import reactHooks from 'eslint-plugin-react-hooks'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import perfectionist from 'eslint-plugin-perfectionist'

export default tseslint.config(
   {
      ignores: [
         '.next',
         '.idea',
         '.vscode',
         'tests/*',
         'scripts/*',
         'public/*',
         'dist',
         'index.js',
         '**/*.d.ts',
         'node_modules',
         'components.json',
      ],
   },
   js.configs.recommended,
   ...tseslint.configs.recommended,
   importPlugin.flatConfigs.recommended,
   importPlugin.flatConfigs.typescript,
   {
      files: ['**/*.{js,ts,jsx,tsx,cjs,cts,mjs,mts}'],
      languageOptions: {
         ecmaVersion: 2021,
         globals: { ...globals.browser, ...globals.node },
      },
      plugins: {
         react,
         prettier: prettierPlugin,
         'react-hooks': reactHooks,
         'react-refresh': reactRefresh,
         perfectionist,
      },
      rules: {
         ...react.configs.flat.recommended.rules,
         ...react.configs.flat['jsx-runtime'].rules,
         ...prettierConfig.rules,
         ...reactHooks.configs.recommended.rules,
         ...reactRefresh.configs.recommended.rules,
         'prettier/prettier': ['warn', { usePrettierrc: true }],
         'react-refresh/only-export-components': 0,
         'arrow-parens': 'off',
         'consistent-return': 'off',
         curly: ['error', 'all'],
         'import/extensions': [
            'error',
            { css: 'always', json: 'always', scss: 'always', svg: 'always' },
         ],
         'import/no-duplicates': 'error',
         'import/order': 'off',
         'import/prefer-default-export': 'off',
         'max-lines': ['error', 300],
         'no-console': ['warn', { allow: ['warn', 'error'] }],
         'no-debugger': 'warn',
         'no-empty-pattern': 'off',
         'no-nested-ternary': 'error',
         'no-undef': 'warn',
         '@typescript-eslint/no-unused-vars': [
            'error',
            {
               args: 'after-used',
               ignoreRestSiblings: true,
               argsIgnorePattern: '^_.*?$',
            },
         ],
         'no-var': 'error',
         'padding-line-between-statements': [
            'error',
            { blankLine: 'always', next: 'return', prev: '*' },
            { blankLine: 'always', next: '*', prev: ['const', 'let', 'var'] },
            {
               blankLine: 'any',
               next: ['const', 'let', 'var'],
               prev: ['const', 'let', 'var'],
            },
         ],
         'perfectionist/sort-imports': [
            'error',
            {
               customGroups: {
                  type: { reactType: 'react' },
                  value: { react: ['react', 'react-*'], alias: ['@/-*'] },
               },
               groups: [
                  'reactType',
                  'type',
                  'internal-type',
                  'sibling-type',
                  'react',
                  'builtin',
                  'external',
                  'alias',
                  'internal',
                  'side-effect',
                  'style',
               ],
               newlinesBetween: 'always',
               order: 'asc',
               type: 'natural',
            },
         ],
         'perfectionist/sort-modules': 'off',
         'prefer-const': 'error',
         'react/button-has-type': 'error',
         'react/display-name': 'off',
         'react/jsx-boolean-value': ['error'],
         'react/jsx-curly-brace-presence': [
            'error',
            { children: 'ignore', propElementValues: 'always', props: 'always' },
         ],
         'react/jsx-fragments': ['error'],
         'react/prop-types': 'off',
         'react/void-dom-elements-no-children': ['error'],
         '@typescript-eslint/consistent-type-imports': [
            'error',
            {
               prefer: 'type-imports',
               fixStyle: 'separate-type-imports',
            },
         ],
      },
      settings: {
         'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
         },
         'import/resolver': {
            node: { extensions: ['.js', '.jsx', '.ts', '.tsx'], paths: ['src'] },
            typescript: { alwaysTryTypes: true },
         },
         react: {
            version: 'detect',
         },
      },
   }
)
