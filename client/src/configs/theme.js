const mainColor = '#9d1254';
const secondaryColor = '#282f44';
const secondaryColor_light = "#8087a0";

const valid = '#129d5c';
const error = '#9d1712';

export default {
  mainColor,
  secondaryColor,
  secondaryColor_light,
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
    width: 60,
    navigation: {
      height: '42px',
      option: {
        activeColor: '#fff',
        background: secondaryColor,
        activeBackground: mainColor
      }
    },
    calendar: {
      width: 57,
      border: `1px solid ${secondaryColor}`
    }
  },
  tools: {
    left: {
      width: 15
    },
    right: {
      width: 25
    }
  },
};