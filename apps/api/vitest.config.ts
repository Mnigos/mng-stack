import swc from 'unplugin-swc'
import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  test: {
    globals: true,
    root: './',
    pool: 'forks',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        '**/node_modules/**',
        '**/migrations/**',
        '**/types/**',
        '**/constants/**',
        '**/tests/**',
        '**/index.ts',
        '**/main.ts',
        '**/config/**',
        '**/*.config.ts',
        '**/*.config.js',
        '**/*.d.ts',
        '**/*.entity.ts',
        '**/*.module.ts',
        '**/*.schema.ts',
        '**/*.doc.ts',
        '**/*.mock.ts',
        '**/*.enum.ts',
        '**/*.dto.ts',
        '**/*.spec.ts',
        '**/*.cjs',
        '**/*.mjs',
      ],
      all: true,
    },
  },
  plugins: [
    tsconfigPaths(),
    swc.vite({
      module: { type: 'es6' },
    }),
  ],
})
