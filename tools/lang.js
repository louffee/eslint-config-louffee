const ERROR = 'error'
const DISABLED = 'off'

const PREFER_IMPORT = 'prefer-import'

const ALWAYS = 'always'
const NEVER = 'never'

module.exports = {
  plugins: ['@typescript-eslint'],
  rules: {
    semi: ERROR,
    '@typescript-eslint/semi': [ERROR, ALWAYS],
    '@typescript-eslint/no-explicit-any': ERROR,
    indent: [
      ERROR,
      2,
      {
        SwitchCase: 1,
      },
    ],
    '@typescript-eslint/triple-slash-reference': [
      ERROR,
      {
        types: PREFER_IMPORT,
        path: NEVER,
        lib: NEVER,
      },
    ],
    '@typescript-eslint/type-annotation-spacing': DISABLED,
    camelcase: ERROR,
    complexity: [
      ERROR,
      {
        max: 8,
      },
    ],
    'constructor-super': ERROR,
    curly: [ERROR, 'all'],
    'default-case': ERROR,
    'guard-for-in': ERROR,
    'id-blacklist': [
      'error',
      'any',
      'Number',
      'number',
      'String',
      'string',
      'Boolean',
      'boolean',
      'Undefined',
      'undefined',
      'Null',
      'null',
      'unknown',
      'Array',
      'void',
      'never',
      'object',
      'Object',
      'Symbol',
      'await',
      'async',
      'bigint',
      'BigInt',
    ],
    'new-parens': ERROR,
    'no-bitwise': ERROR,
    'no-caller': ERROR,
    'no-cond-assign': ERROR,
    'no-empty': ERROR,
    'no-eval': ERROR,
    'no-fallthrough': ERROR,
    'no-invalid-this': ERROR,
    'no-multiple-empty-lines': ERROR,
    'no-new-wrappers': ERROR,
    'no-redeclare': ERROR,
    'no-shadow': DISABLED,
    '@typescript-eslint/no-shadow': ERROR,
    'no-trailing-spaces': DISABLED,
    'no-undef-init': ERROR,
    'no-underscore-dangle': DISABLED,
    'no-unsafe-finally': ERROR,
    'no-unused-expressions': [ERROR, { allowShortCircuit: true }],
    'no-unused-vars': DISABLED,
    'no-unused-labels': ERROR,
    'no-var': ERROR,
    'no-void': ERROR,
    'one-var': [ERROR, NEVER],
    'padding-line-between-statements': [
      ERROR,
      {
        blankLine: ALWAYS,
        prev: '*',
        next: 'return',
      },
    ],
    'prefer-const': ERROR,
    'use-isnan': ERROR,
    'valid-typeof': ERROR,
    'linebreak-style': [ERROR, 'unix'],
    quotes: [ERROR, 'single'],
    'no-console': [ERROR, { allow: ['warn', 'error'] }],
    'no-debugger': ERROR,
    'no-duplicate-imports': ERROR,
    '@typescript-eslint/explicit-function-return-type': DISABLED,
    '@typescript-eslint/no-unused-vars': [
      ERROR,
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    '@typescript-eslint/require-await': ERROR,
    '@typescript-eslint/await-thenable': ERROR,
    '@typescript-eslint/no-floating-promises': ERROR,
    '@typescript-eslint/no-unused-vars': ERROR,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
}
