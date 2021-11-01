const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const globals = require('./webpack.config');
const pkg = require('./package.json');

const { webpackConfig, name, description, version } = pkg;
const { publicPath } = webpackConfig;

const APP_NAME = process.env.NAME;
const isDev = process.env.NODE_ENV === 'development';

const src = path.resolve(__dirname, 'src');
const build = path.resolve(__dirname, 'build');
const assets = path.resolve(__dirname, 'src', 'assets');

const configuration = {
  target: 'web',
  entry: {
    main: 'index.tsx',
  },
  output: {
    filename: 'static/js/[name].[contenthash:8].js',
    path: build,
    publicPath,
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /(node_modules)/,
        include: src,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { injectType: 'singletonStyleTag' },
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.module\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { injectType: 'singletonStyleTag' },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: isDev ? '[local]__[contenthash:base64:5]' : '[contenthash:base64]',
              },
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.(svg)$/,
        include: src,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(gif|jpg|jpeg|png)$/,
        include: src,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'static/images',
          },
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules'), src],
    alias: {
      assets$: assets,
      components$: path.join(src, 'components'),
      config$: path.join(src, 'config'),
      hooks$: path.join(src, 'hooks'),
      icons$: path.join(src, 'icons'),
      modals$: path.join(src, 'modals'),
      pages$: path.join(src, 'pages'),
      postcss$: path.join(src, 'postcss'),
      styles$: path.join(src, 'styles'),
      utils$: path.join(src, 'utils'),
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      /* this results in smaller, cacheable bundles but bigger download size overall
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
      */
    },
  },
  plugins: [
    globals['process.argv'].analyze && new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin(globals),
    new CleanWebpackPlugin(),
    new webpack.ids.HashedModuleIdsPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(assets, 'images'),
          to: path.join(build, 'static', 'images'),
        },
        {
          from: path.join(assets, 'favicon'),
          to: path.join(build, 'static', 'favicon'),
        },
        {
          from: path.join(assets, 'scripts'),
          to: path.join(build, 'static', 'scripts'),
        },
        {
          from: path.resolve(__dirname, 'src', 'public'),
          to: build,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      templateContent: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <meta name="Description" content="Elenor says 'Hello world'" />
            <base href="${publicPath}"/>
            <link rel="manifest" href="${publicPath}asset-manifest.json" />
            <link rel="apple-touch-icon" sizes="180x180" href="${publicPath}static/favicon/apple-touch-icon.png">
            <link rel="icon" type="image/png" sizes="32x32" href="${publicPath}static/favicon/favicon-32x32.png">
            <link rel="icon" type="image/png" sizes="16x16" href="${publicPath}static/favicon/favicon-16x16.png">
            <link rel="manifest" href="${publicPath}static/favicon/site.webmanifest">
            <link rel="mask-icon" href="${publicPath}static/favicon/safari-pinned-tab.svg" color="#f41150">
            <link rel="shortcut icon" href="${publicPath}static/favicon/favicon.ico">
            <meta name="msapplication-TileColor" content="#f41150">
            <meta name="msapplication-config" content="${publicPath}static/favicon/browserconfig.xml">
            <meta name="theme-color" content="#ffffff">
            <title>${APP_NAME}</title>
          </head>
          <body>
            <div id="root"></div>
          </body>
        </html>
      `,
      meta: {
        viewport: 'width=device-width, initial-scale=1',
      },
      minify: {
        useShortDoctype: true,
        keepClosingSlash: true,
        collapseWhitespace: true,
        preserveLineBreaks: true,
      },
      chunksSortMode: 'none',
    }),
    new WebpackManifestPlugin({
      fileName: 'asset-manifest.json',
      publicPath,
      generate: (seed, files, entrypoints) => {
        const manifestFiles = files.reduce((manifest, file) => {
          manifest[file.name] = file.path;
          return manifest;
        }, seed);
        const entrypointFiles = entrypoints.main.filter(fileName => !fileName.endsWith('.map'));

        return {
          files: manifestFiles,
          entrypoints: entrypointFiles,
        };
      },
    }),
    new GenerateJsonPlugin('about.json', {
      name,
      description,
      version,
      published: new Date().toString(),
    }),
  ].filter(Boolean),
};

module.exports = configuration;
