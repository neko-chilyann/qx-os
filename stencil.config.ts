import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import eslint from '@rollup/plugin-eslint';

export const config: Config = {
  autoprefixCss: true,
  namespace: 'qx-os',
  globalScript: './src/global',
  globalStyle: './src/styles/os.bundle.scss',
  plugins: [sass()],
  rollupPlugins: {
    before: [eslint()],
  },
  bundles: [
    {
      components: [
        'os-main',
        'os-desktop',
        'os-desktop-panel',
        'os-taskbar',
        'os-window',
        'os-window-title',
        'os-window-header-toolbar',
      ],
    },
    { components: ['os-background-img'] },
    { components: ['os-context-menu'] },
    { components: ['os-drawer'] },
    { components: ['os-popper'] },
  ],
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
