const ERROR = 'error'
const WARN = 'warn'

module.exports = {
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARN, // https://github.com/facebook/create-react-app/issues/6880#issuecomment-485912528
  },
}
