const DISABLED = 'off'
const ERROR = 'error'

module.exports = {
  plugins: ['import'],
  rules: {
    'import/no-default-export': DISABLED,
    'import/no-anonymous-default-export': ERROR,
    'import/no-unresolved': DISABLED, // Conflict with TypeScript rules
    'import/no-unassigned-imports': DISABLED,
    'import/exports-last': ERROR,
    'import/order': [
      'error',
      {
        warnOnUnassignedImports: false,
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'react-*',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@louffee/**',
            group: 'external',
            position: 'before',
          },
        ],
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
      },
    ],
    'import/no-unassigned-import': [
      ERROR,
      {
        allow: ['**/*.d.ts', '**/*.css', '**/*.scss', '*/**.sass'],
      },
    ],
  },
}
