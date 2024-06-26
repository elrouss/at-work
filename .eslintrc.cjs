module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.github', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['arrow-function', 'function-declaration'],
      },
    ],
    'import/order': [
      2,
      {
        groups: [
          'external',
          'builtin',
          'index',
          'sibling',
          'parent',
          'internal',
          'type',
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'consistent-return': 'off',
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',
    'react/button-has-type': 'off',
    'import/extensions': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-useless-catch': 'off',
    'array-callback-return': 'off',
    'no-return-assign': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
