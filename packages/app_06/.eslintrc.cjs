module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/warnings',
    'plugin:storybook/recommended',
  ],
  overrides: [
    {
      files: ['*.stories.tsx', 'src/pages/**/*'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['*.test.ts', '*.mock.ts'],
      rules: {
        'max-lines': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['import'],
  rules: {
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'object', 'type', 'index'],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          { pattern: '@/components/**', group: 'internal', position: 'before' },
          { pattern: './**/*.css', group: 'index', position: 'before' },
        ],
      },
    ],
  },
};
