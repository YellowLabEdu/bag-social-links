module.exports = {
  root: true,
  env: { 
    browser: true, 
    es2020: true,
    node : true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    //*'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: `@typescript-eslint/parser`, //! comment out if not using TypeScript
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { 
    ecmaVersion: 'latest', 
    sourceType: 'module',
    ecmaFeatures: { jsx: true }, 
  },
  settings: { react: { version: '18.2' } },
  plugins: [
    'react-refresh', 
    'react', 
    '@typescript-eslint', 
    'prettier'], //! comment out if not using TypeScript
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'no-usede-vars': 'warn',
    'react/jsx-uses-react': 'off',
    'typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ], //! comment out if not using TypeScript
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}