import { defineConfig } from 'umi';

export default defineConfig({
  base: './',
  publicPath: '//npm.tansuyun.cn/qlcdn/',
  hash: true,
  layout: false,
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  dynamicImport: {
    loading: '@/components/pageLoading',
  },
  favicon: '/images/g5.ico',
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:5600/',
      changeOrigin: true,
      ws: true,
    },
  },
  outputPath: 'dist',

  chainWebpack: (config) => {
    // config.plugin('compression-webpack-plugin').use(
    //   new CompressionPlugin({
    //     algorithm: 'gzip',
    //     test: new RegExp('\\.(js|css)$'),
    //     threshold: 10240,
    //     minRatio: 0.6,
    //   }),
    // );
  },
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
    darkreader: 'window.DarkReader',
    codemirror: 'window.CodeMirror',
    'sockjs-client': 'window.SockJS',
  },
  scripts: [
    'https://gw.alipayobjects.com/os/lib/react/16.13.1/umd/react.production.min.js',
    'https://gw.alipayobjects.com/os/lib/react-dom/16.13.1/umd/react-dom.production.min.js',
    'https://cdn.jsdelivr.net/npm/darkreader@4.9.40/darkreader.min.js',
    'https://cdn.jsdelivr.net/npm/codemirror@5/lib/codemirror.min.js',
    'https://cdn.jsdelivr.net/npm/codemirror@5/mode/shell/shell.js',
    'https://cdn.jsdelivr.net/npm/codemirror@5/mode/python/python.js',
    'https://cdn.jsdelivr.net/npm/codemirror@5/mode/javascript/javascript.js',
    'https://cdn.jsdelivr.net/npm/sockjs-client@1/dist/sockjs.min.js',
  ],
});
