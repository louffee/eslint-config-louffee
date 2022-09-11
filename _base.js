const browser = require('./tools/browser')
const __import = require('./tools/import')
const jest = require('./tools/jest')
const lang = require('./tools/lang')
const promise = require('./tools/promise')

const base = ({ isBrowser } = {}) => {
  return {
    plugins: [
      ...__import.plugins,
      ...jest.plugins,
      ...lang.plugins,
      ...promise.plugins,
      isBrowser && 'compat',
      'regexp',
      'unicorn',
    ].filter(Boolean),
    env: isBrowser ? browser.env : {},
    rules: {
      ...__import.rules,
      ...jest.rules,
      ...lang.rules,
      ...promise.rules,
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            pascalCase: true,
          },
        },
      ],
      'unicorn/no-this-assignment': 'error',
      'unicorn/no-new-array': 'error',
      'unicorn/no-array-instanceof': 'error',
      'unicorn/no-for-loop': 'off',
      'unicorn/no-empty-file': 'error',
      'unicorn/no-nested-ternary': 'error',
      'unicorn/no-useless-undefined': 'error',
      'unicorn/no-useless-spread': 'error',
      'unicorn/no-useless-length-check': 'error',
      'unicorn/no-unsafe-regex': 'error',
      'unicorn/prefer-date-now': 'warn',
      'unicorn/prefer-event-target': 'warn',
      'unicorn/better-regex': 'warn',
      'unicorn/prefer-flat-map': 'warn',
      'unicorn/prefer-includes': 'error',
      'unicorn/prefer-node-protocol': 'warn',
      'unicorn/prefer-switch': 'error',
      'unicorn/error-message': 'error',
      'unicorn/catch-error-name': 'error',
      'unicorn/expiring-todo-comments': 'warn',
      'unicorn/no-array-for-each': 'error',
      'unicorn/escape-case': 'error',
      'unicorn/no-invalid-remove-event-listener': 'error',
      'unicorn/no-abusive-eslint-disable': 'error',
      'unicorn/empty-brace-spaces': 'error',
      'unicorn/no-array-method-this-argument': 'error',
      'unicorn/consistent-function-scoping': 'warn',
      'unicorn/consistent-destructuring': 'warn',
      'unicorn/no-array-push-push': 'error',
      'unicorn/no-process-exit': 'error',
      'unicorn/no-console-spaces': 'error',
      'unicorn/no-await-expression-member': 'warn',
      'unicorn/no-document-cookie': 'error',
      'unicorn/prefer-logical-operator-over-ternary': 'warn',
      'unicorn/no-thenable': 'error',
      'unicorn/no-object-as-default-parameter': 'off',
      'unicorn/no-array-reduce': [
        'error',
        {
          allowSimpleOperations: true,
        },
      ],
      'unicorn/no-keyword-prefix': 'off',
      'unicorn/no-lonely-if': 'error',
      'unicorn/prevent-abbreviations': [
        'error',
        {
          allowList: {
            props: true,
            getInitialProps: true,
            e: false,
            p: false,
            res: false,
            req: false,
            ctx: false,
            arg: false,
            err: true,
            Props: true,
          },
        },
      ],

      'no-lonely-if': 'error',
      'no-else-return': 'error',
      quotes: ['error', 'single'],
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-template': 'error',
      'no-alert': 'error',
      semi: ['error', 'never'],
      '@typescript-eslint/semi': ['error', 'never'],
      'no-unused-vars': 'error',
      'no-useless-escape': 'off',
      'no-useless-constructor': 'error',
      'no-useless-concat': 'error',
      'no-useless-call': 'error',
    },
    parser: lang.parser,
    parserOptions: {
      ...lang.parserOptions,
    },
    extends: [
      'eslint:recommended',
      isBrowser && 'plugin:compat/recommended',
      'plugin:regexp/recommended',
      'plugin:unicorn/recommended',
      'plugin:promise/recommended',
      'plugin:jest/recommended',
    ].filter(Boolean),
  }
}

module.exports = base
