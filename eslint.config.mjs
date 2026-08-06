import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

const unusedVars = [
  'warn',
  { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
];

export default [
  {
    ignores: [
      '.cache/',
      'public/',
      'node_modules/',
      'static/css/basscss.css',
      'markdown/',
    ],
  },
  js.configs.recommended,
  {
    // Gatsby's Node-side entry points run outside the browser and use CommonJS.
    files: ['gatsby-config.js', 'gatsby-node.js', 'meta/*.js'],
    languageOptions: {
      globals: globals.node,
      sourceType: 'commonjs',
    },
    rules: {
      'no-unused-vars': unusedVars,
    },
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    ignores: ['gatsby-config.js', 'gatsby-node.js', 'meta/*.js'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      sourceType: 'module',
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...reactHooks.configs.flat.recommended.rules,
      'no-unused-vars': unusedVars,
      // Gatsby injects React into every JSX file, so the pre-17 runtime rules
      // report on code that is correct.
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      // This codebase does not declare propTypes. Enforcing the rule would mean
      // annotating every component before lint can pass, which is a project of
      // its own and not the direction a JS codebase should be pushed in now.
      'react/prop-types': 'off',
    },
    settings: {
      react: { version: 'detect' },
    },
  },
  prettier,
];
