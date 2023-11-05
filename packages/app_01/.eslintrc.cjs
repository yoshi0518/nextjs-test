module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'next/core-web-vitals', 'prettier'],
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
  plugins: ['import', 'unused-imports'],
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'object', 'type', 'index'],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [{ pattern: '@/components/**', group: 'internal', position: 'before' }],
      },
    ],
  },
};
