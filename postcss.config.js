/* eslint-disable global-require */
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-mixins')({
      mixins: require('./postcss/mixins.js'),
    }),
    require('postcss-simple-vars')({
      variables: () => {
        const inherited = require('./node_modules/@phork/phorkit/config.json');
        const local = require('./postcss/vars');

        return {
          ...inherited,
          ...local,
        };
      },
    }),
    require('postcss-nested'),
    require('autoprefixer'),
    require('cssnano')({
      mergeLonghand: false,
      discardEmpty: true,
    }),
  ],
};
