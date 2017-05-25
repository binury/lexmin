module.exports = {
  extends: ['idiomatic', 'plugin:import/warnings', 'plugin:import/errors'],
  env: {
    es6: true,
    browser: true,
    node: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      experimentalObjectRestSpread: true,
    }
  }
};