const mainColor = '#9d1254';
const secondaryColor = '#5c4755';

const valid = '#39b566';
const error = '#ac211d';

export default {
  mainColor,
  secondaryColor,
  valid,
  error,
  layout: {
    border: `1px solid ${secondaryColor}`
  },
  header: {
    height: '54px',
    color: mainColor,
  },
  view: {
    width: '60',
    navigation: {
      height: '42px',
      option: {
        activeColor: '#fff',
        background: secondaryColor,
        activeBackground: mainColor
      }
    },
    calendar: {
      width: 57
    }
  },
  tools: {
    left: {
      width: '15'
    },
    right: {
      width: '25'
    }
  },
};