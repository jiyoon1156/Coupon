module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['js', 'jsx'] }],
    'no-console': ['off'],
    'react/jsx-props-no-spreading': ['warn'],
  },
};
