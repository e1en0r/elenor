const mixins = {
  visuallyHidden: () => {
    return {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      width: '1px',
    };
  },

  allowMaximumFlexboxShrinkage: () => {
    return {
      minHeight: 0,
      minWidth: 0,
      overflow: 'hidden',
    };
  },
};

module.exports = mixins;
