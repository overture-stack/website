module.exports = {
  extends: ['react-app', 'prettier'],
  plugins: ['prettier'],
  globals: {Expo: true},
  rules: {
    'prettier/prettier': [1, { trailingComma: 'all', singleQuote: true }],
    'no-unused-vars': [
      1,
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
  },
};
