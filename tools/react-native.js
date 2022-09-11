const ERROR = 'error'
const WARN = 'warn'
const DISABLED = 'off'

module.exports = {
  plugins: ['react-native'],
  rules: {
    'react-native/no-raw-text': DISABLED,
    'react-native/split-platform-components': [
      WARN,
      {
        androidPathRegex: '\\.android.tsx',
        iosPathRegex: '\\.ios.tsx',
      },
    ],
    'react-native/no-unused-styles': ERROR,
    'react-native/no-inline-styles': ERROR,
    'react-native/no-color-literals': ERROR,
    'react-native/no-single-element-style-arrays': ERROR,
  },
}
