const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    sourceType: 'module',
    ecmaVersion: 'latest',
    extraFileExtensions: ['.md', '.mdx'],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        project,
        extensions: ['.js', '.ts', '.tsx', '.jsx'],
      },
      typescript: {
        project,
        alwaysTryTypes: true,
      },
    },
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|html)$'],
  },
  ignorePatterns: [
    '.*.js',
    'node_modules/',
    'dist/',
    '.eslintrc.cjs',
    'server.ts',
    'vitest.config.ts',
  ],
  plugins: [
    '@typescript-eslint',
    '@trilon/eslint-plugin',
    'nestjs',
    'only-warn',
    'eslint-plugin-import-helpers',
    'sonarjs',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:@trilon/recommended',
    'plugin:nestjs/recommended',
    'plugin:vitest/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:sonarjs/recommended-legacy',
    'plugin:unicorn/recommended',
    'turbo',
    'prettier',
    'plugin:@eslint-community/eslint-comments/recommended',
  ],
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:vitest/recommended'],
      rules: {
        'sonarjs/no-duplicate-string': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['*.cjs'],
      rules: {
        'unicorn/no-empty-file': 'off',
      },
    },
  ],
  rules: {
    'no-undef': 'off',
    'prefer-const': 'warn',
    'prettier/prettier': 'warn',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unnecessary-type-parameters': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: false },
    ],
    '@typescript-eslint/no-base-to-string': [
      'error',
      { ignoredTypeNames: ['Url'] },
    ],
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowArray: true,
        allowNumber: true,
        allowRegExp: true,
      },
    ],
    '@typescript-eslint/restrict-plus-operands': [
      'error',
      {
        allowNumberAndString: true,
      },
    ],
    'sonarjs/pseudo-random': 'off',
    'sonarjs/no-array-index-key': 'off',
    'sonarjs/no-nested-conditional': 'off',
    'sonarjs/function-return-type': 'off',
    'sonarjs/use-type-alias': 'off',
    'sonarjs/no-misused-promises': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/no-unreadable-array-destructuring': 'off',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
        },
        ignore: ['/^$/', 'README.md$'],
      },
    ],
    'unicorn/no-null': 'off',
    'unicorn/prefer-spread': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        allowList: {
          ref: true,
          Ref: true,
          props: true,
          Props: true,
          param: true,
          params: true,
          Param: true,
          Params: true,
          args: true,
          env: true,
          Env: true,
        },
      },
    ],
    'unicorn/prefer-top-level-await': 'off',
    'import/no-cycle': 'warn',
    'import/consistent-type-specifier-style': ['off'],
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
      },
    ],
    '@trilon/detect-circular-reference': 'off',
    'nestjs/use-validation-pipe': 'off',
  },
}
