import isCI from 'is-ci';
import { defineConfig, type Options } from 'tsup';

const entry = 'src/index.ts';

const sharedConfig = defineConfig({
    name: 'cfdi-to-json',
    globalName: 'cfdiToJson',
    splitting: false,
    sourcemap: true,
    format: ['esm', 'cjs', 'iife'],
    minify: isCI,
    shims: true,
    esbuildOptions: (options, context) => {
        if (context.format !== 'esm') {
            return;
        }

        options.banner = {
            js: `import { createRequire } from 'module'; const require = createRequire(import.meta.url);`,
        };
    },
});

const mainConfig = defineConfig({
    ...sharedConfig,
    entry: {
        'cfdi-to-json': entry,
    },
    dts: false,
}) as Options;

const dtsConfig = defineConfig({
    ...sharedConfig,
    entry: {
        'cfdi-to-json': entry,
    },
    dts: {
        entry,
        only: true,
        resolve: true,
    },
}) as Options;

export default defineConfig([mainConfig, dtsConfig]);
