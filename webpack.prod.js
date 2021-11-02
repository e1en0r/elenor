require('dotenv').config({ path: './.env' });

const path = require('path');
const { merge } = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const common = require('./webpack.common.js');

const useProfiling = !!process.env.PROFILING && process.env.PROFILING !== 'false';
const srcPath = path.resolve(__dirname, 'src');

if (!process.env.PUBLIC_URL) {
  throw new Error(`❌ Missing .env file. See .env.sample for an example.`);
}

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: true,
        parallel: true,
        extractComments: 'all',
      }),
    ],
  },
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 8192,
      minRatio: 0.8,
    }),
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: `${srcPath}/service-worker.js`,
      dontCacheBustURLsMatching: /\.[0-9a-f]{8}\./,
      exclude: [/\.map$/, /asset-manifest\.json$/, /LICENSE/],
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
    }),
  ],
  resolve: {
    alias: {
      ...(useProfiling && {
        'react-dom$': 'react-dom/profiling',
        'scheduler/tracing': 'scheduler/tracing-profiling',
      }),
    },
  },
});
