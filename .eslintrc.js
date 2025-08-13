module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    'react-native/react-native': true,
  },
  extends: [
    'eslint:recommended',
  ],
  plugins: [
    'react',
    'react-native',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'eslint:recommended',
      ],
      rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
      },
    },
  ],
  rules: {
    // Console statements
    'no-console': 'warn',
    
    // Best practices
    'prefer-const': 'warn',
    'no-var': 'warn',
    'no-unused-vars': 'warn',
    'no-undef': 'error',
    
    // React rules
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    
    // React Native rules
    'react-native/no-unused-styles': 'warn',
    'react-native/split-platform-components': 'warn',
    'react-native/no-inline-styles': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
