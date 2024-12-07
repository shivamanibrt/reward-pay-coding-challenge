const js = require('@eslint/js');
const globals = require('globals');
const typescript = require('@typescript-eslint/eslint-plugin');
const prettier = require('eslint-plugin-prettier');
const eslintConfigPrettier = require('eslint-config-prettier');

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.ts'],
    plugins: {
      '@typescript-eslint': typescript,
      prettier: prettier,
    },
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      'prettier/prettier': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      // Add any custom rules here
    },
  },
  {
    ignores: [
      'node_modules/',
      'build/',
      'dist/',
      '**/*.test.ts',
      '**/*.test.js',
    ],
  },
];
