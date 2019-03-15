module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
  },
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'prettier', 'prettier/standard'],
  rules: {
    'prettier/prettier': 'error',
  },
};
