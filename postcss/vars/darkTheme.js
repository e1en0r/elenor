const config = require('@phork/phorkit/config.json');

const shadowColors = {
  'box-shadow-card': `
    0px 1px 6px 0px rgba(0, 0, 0, .8)
  `,
};

const otherColors = {
  'card-header-background-color': config['dark-color-BG10'],
  'card-header-text-color': config['dark-color-FG0'],
  'card-header-border-color': 'rgba(255, 255, 255, 0.2)',

  'line-loader-color': config['dark-color-FG0-O20'],
};

module.exports = {
  ...shadowColors,
  ...otherColors,
};
