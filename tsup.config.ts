import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: 'esm',
  target: 'node16',
  clean: true,
  dts: true,
  esbuildOptions(options, context) {
    options.charset = 'utf8'
  },
})
