import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*'],
  },
  coverage: {
    provider: 'v8',
    include: ['src/**/*.ts'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/docs/**/*',
      '**/docs/assets/*.js',
    ],
  },
});
