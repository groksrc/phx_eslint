// We're extending the recommended ruleset by default.
// Add tweaks to 'rules': http://eslint.org/docs/rules/

module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    'array-bracket-spacing': ['error', 'never', { arraysInArrays: false, objectsInArrays: false }],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
    'curly': 'error',
    'default-param-last': 'error',
    'dot-notation': 'error',
    'eqeqeq': 'error',
    'eol-last': 'error',
    'func-call-spacing': ['error', 'never'],
    'function-paren-newline': ['error', 'consistent'],
    'generator-star-spacing': 'off',
    'indent': ['error', 2, {
      MemberExpression: 1,
      SwitchCase: 1,
      VariableDeclarator: { var: 2, let: 2, const: 3 },
      CallExpression: { arguments: 'first' },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1
    }],
    'key-spacing': ['error', { beforeColon: false, mode: 'minimum' }],
    'keyword-spacing': 'error',
    'max-len': ['warn', { code: 120 }],
    'no-console': 'error',
    'no-extra-parens': ['error', 'all', { nestedBinaryExpressions: false }],
    'no-debugger': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': ['error', { allow: ['!!'] } ],
    'no-multi-spaces': ['error', {
      exceptions: { ImportDeclaration: true, ObjectExpression: true },
      ignoreEOLComments: true
    }],
    'no-return-await': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-use-before-define': ['error', { functions: false }],
    'no-var': 'error',
    'object-curly-newline': ['error', { consistent: true }],
    'object-curly-spacing': ['error', 'always', { arraysInObjects: true, objectsInObjects: true }],
    'padded-blocks': ['error', 'never'],
    'prefer-const': 'error',
    'prefer-regex-literals': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quotes': ['error', 'single'],
    'require-atomic-updates': 'error',
    'require-await': 'error',
    'semi': ['error', 'never'],
    'yoda': 'error'
  },
  plugins: [
    'vue',
    'chai-friendly'
  ]
}
