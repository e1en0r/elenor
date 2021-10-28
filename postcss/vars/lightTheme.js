const config = require('@phork/phorkit/config.json');

const shadowColors = {
  'box-shadow-card': `
    0px 1px 6px 0px rgba(0, 0, 0, .1)
  `,
};

const otherColors = {
  'card-header-background-color': '#393945',
  'card-header-text-color': '#fff',
  'card-header-border-color': 'rgba(255, 255, 255, 0.2)',

  'line-loader-color': config['light-color-FG0-O10'],
};

module.exports = {
  ...shadowColors,
  ...otherColors,
};
