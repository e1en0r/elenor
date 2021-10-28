const pkg = require('./package.json');

const { version, webpackConfig } = pkg;
const { publicPath } = webpackConfig;

const argv = Object.values(process.argv).reduce((acc, arg) => {
  if (arg.match(/^--[a-z]+/)) {
    const [key, val] = arg.split('=');
    acc[key.replace('--', '')] = val === undefined ? true : val;
  }
  return acc;
}, {});

const globals = Object.keys(process.env).reduce(
  (acc, key) => {
    acc['process.env'][key] = JSON.stringify(process.env[key]);
    return acc;
  },
  {
    'process.env': {
      __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
      __VERSION__: JSON.stringify(version),
      __BASE__: JSON.stringify(publicPath),
      __NAME__: JSON.stringify(process.env.NAME),
    },
  },
);

module.exports = { ...globals, 'process.argv': argv };
