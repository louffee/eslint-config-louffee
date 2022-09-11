const ERROR = 'error'

const ALWAYS = 'always'

module.exports = {
  plugins: ['react', 'jsx-a11y'],
  rules: {
    'react/destructuring-assignment': [ERROR, ALWAYS],
    'react/button-has-type': ERROR,
    'react/no-unescaped-entities': ERROR,
    'react/state-in-constructor': ERROR,
    'react/no-unstable-nested-components': ERROR,
    'react/no-danger': ERROR,
    'react/jsx-props-no-spreading': ERROR,
    'react/no-direct-mutation-state': ERROR,
    'react/no-unused-prop-types': ERROR,
    'react/no-will-update-set-state': ERROR,
    'react/void-dom-elements-no-children': ERROR,
    'react/no-unknown-property': ERROR,
    'react/no-deprecated': ERROR,
    'react/jsx-filename-extension': [
      ERROR,
      {
        extensions: ['.tsx'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
}
