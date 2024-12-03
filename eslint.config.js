import { FlatCompat } from '@eslint/eslintrc';
import reactPlugin from 'eslint-plugin-react';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';

const compat = new FlatCompat({
  recommendedConfig: {},
});

export default [
  ...compat.extends('eslint:recommended'),
  ...compat.extends('plugin:react/recommended'),
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  ...compat.extends('next/core-web-vitals'),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': typescriptPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off', // Disable this rule for React 17+
    },
  },
  {
    ignores: ['node_modules', '.next', 'tsconfig.json'], // Ignore these folders
  },
];
