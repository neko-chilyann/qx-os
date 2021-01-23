import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import eslint from '@rollup/plugin-eslint';
import NodePolyfills from 'rollup-plugin-node-polyfills';

export const config: Config = {
  autoprefixCss: true,
  namespace: 'qx-os',
  globalScript: './src/global',
  globalStyle: './src/styles/os.bundle.scss',
  plugins: [sass()],
  rollupPlugins: {
    before: [eslint(), NodePolyfills()],
  },
  bundles: [{ components: ['os-main', 'os-desktop'] }],
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
    port: 8080,
  },
};
