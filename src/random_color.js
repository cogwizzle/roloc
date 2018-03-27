/**
 * RolocState singleton.
 */
const rolocState = (function() {
  let instance = undefined;

  function getInstance() {

    if (!instance) {

      instance = (function () {

        let lastIndex = 0;

        function getLastIndex() {

          return lastIndex;
        }

        function setLastIndex(index) {

          lastIndex = index;
        }

        return {
          getLastIndex,
          setLastIndex
        };
      })();
    }

    return instance;
  }

  return {
    getInstance
  };
})()

/**
 * Intelligently selects colors.
 * 
 * @param {number} jump Number of colors to jump.
 */
export default (jump) => {
  
  const colors = [
    'Orange',
    'OrangeRed',
    'Red',
    'MediumVioletRed',
    'Violet',
    'BlueViolet',
    'Blue',
    '#0d98ba',
    'Green',
    'GreenYellow',
    'Yellow',
    '#ffae42'
  ];

  return colorPick(colors, jump);
};

/**
 * Function to pick a color based on the last index.
 * 
 * @param {string[]} colors List of colors.
 * @param {number} jump Number of colors to jump.
 */
let colorPick = (colors, jump) => {

  const state = rolocState.getInstance();
  if (jump && typeof jump == 'number') {
    
    state.setLastIndex((state.getLastIndex() + jump) % colors.length);
  } else {

    state.setLastIndex((state.getLastIndex() + 5) % colors.length);
  }

  const color = colors[state.getLastIndex()];

  return color;
}

/**
 * Function for reseting the state of the last index.
 */
const resetRoloc = () => {
  
  const state = rolocState.getInstance();
  state.setLastIndex(0);
};

/**
 * Roloc color blind funciton that uses grey scale.
 * 
 * @param {number} jump Number of colors to jump.
 */
const rolocColorBlind = (jump) => {

  const colors = [
    '#000000',
    '#181818',
    '#383838',
    '#585858',
    '#707070',
    '#909090',
    '#A9A9A9',
    '#C0C0C0',
    '#D8D8D8',
    '#F0F0F0',
    '#FFFFFF'
  ];

  return colorPick(colors, jump);
}

export { resetRoloc, rolocColorBlind };