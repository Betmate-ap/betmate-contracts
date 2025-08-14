import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  {
    // ignore outputs and generated code
    ignores: ['node_modules', 'dist', 'coverage', 'build', 'generated'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    // you can add TypeScript-specific or project rules here
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
];
