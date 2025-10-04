import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import globals from 'globals'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import perfectionist from 'eslint-plugin-perfectionist'

import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
   globalIgnores([
      '**/.idea/**',
      '**/.vscode/**',
      '**/.next/**',
      '**/dist/**',
      '**/build/**',
      '**/node_modules/**',
      '**/coverage/**',
      '**/out/**',
      '**/.turbo/**',
      '**/.yarn/**',
      '**/cypress/videos/**',
      '**/cypress/screenshots/**',
      '**/.DS_Store',
      '**/scripts/**',
      '**/public/**',
      'components.json',
      '.prettierrc',
      '.prettierrc.*',
      'eslint.*',
   ]),
   {
      files: ['**/*.{js,ts,jsx,tsx,cjs,cts,mjs,mts}'],
      extends: [
         js.configs.recommended,
         tseslint.configs.recommended,
         importPlugin.flatConfigs.recommended,
         importPlugin.flatConfigs.typescript,
         reactHooks.configs['recommended-latest'],
         reactPlugin.configs.flat.recommended,
         reactPlugin.configs.flat['jsx-runtime'],
         prettierConfig,
      ],
      plugins: {
         react: reactPlugin,
         prettier: prettierPlugin,
         perfectionist,
      },
      rules: {
         ...prettierConfig.rules,
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
         'import/no-unresolved': ['error', { ignore: ['^/'] }],
         'max-lines': ['error', 300],
         'no-console': ['warn', { allow: ['warn', 'error'] }],
         'no-debugger': 'warn',
         'no-empty-pattern': 'off',
         'no-nested-ternary': 'error',
         'no-undef': 'warn',
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
                  value: { react: ['react', 'react-*'], alias: ['^@/(?!.*\\.(css|scss|sass|less)$)'] },
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
         '@typescript-eslint/no-unused-vars': [
            'error',
            {
               args: 'after-used',
               ignoreRestSiblings: true,
               argsIgnorePattern: '^_.*?$',
            },
         ],
      },
      settings: {
         react: {
            version: 'detect',
         },
         'import/parsers': {
            [tseslint.parser]: ['.ts', '.tsx'],
         },
         'import/resolver': {
            node: { extensions: ['.js', '.jsx', '.ts', '.tsx'], paths: ['src'] },
            typescript: { alwaysTryTypes: true },
         },
      },
      languageOptions: {
         parser: tseslint.parser,
         parserOptions: {
            ecmaFeatures: {
               jsx: true,
            },
         },
         ecmaVersion: 2021,
         sourceType: 'module',
         globals: {
            ...globals.browser,
            ...globals.node,
         },
      },
   },
   {
      files: ['**/*.stories.{ts,tsx}'],
      rules: {
         'no-console': 'off',
         'react-hooks/rules-of-hooks': 'off',
      },
   },
])
