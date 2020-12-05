import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import eslint from '@rollup/plugin-eslint';
import NodePolyfills from 'rollup-plugin-node-polyfills';

export const config: Config = {
    // 青璇桌面主题
    namespace: 'qx-desktop',
    globalScript: './src/global',
    globalStyle: './src/styles/index.scss',
    plugins: [sass()],
    rollupPlugins: {
        before: [eslint(), NodePolyfills()],
    },
    bundles: [],
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'dist-custom-elements-bundle',
        },
        {
            type: 'docs-readme',
        },
        {
            type: 'www',
            serviceWorker: null, // disable service workers
        },
    ],
    devServer: {
        port: 3000,
    },
};
