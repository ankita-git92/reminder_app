module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'prettier',
    'prettier/standard',
  ],
  env: {
    'react-native/react-native': true,
  },
  ignorePatterns: ['node_modules/', 'build/', 'android', 'ios'],
  rules: {
    // allow .js files to contain JSX code
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-multiple-empty-lines': 'error',
  },
};
