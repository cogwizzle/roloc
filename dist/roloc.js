'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * RolocState singleton.
 */
var rolocState = function () {
  var instance = undefined;

  function getInstance() {

    if (!instance) {

      instance = function () {

        var lastIndex = 0;

        function getLastIndex() {

          return lastIndex;
        }

        function setLastIndex(index) {

          lastIndex = index;
        }

        return {
          getLastIndex: getLastIndex,
          setLastIndex: setLastIndex
        };
      }();
    }

    return instance;
  }

  return {
    getInstance: getInstance
  };
}();

/**
 * Intelligently selects colors.
 * 
 * @param {number} jump Number of colors to jump.
 */

exports.default = function (jump) {

  var colors = ['Orange', 'OrangeRed', 'Red', 'MediumVioletRed', 'Violet', 'BlueViolet', 'Blue', '#0d98ba', 'Green', 'GreenYellow', 'Yellow', '#ffae42'];

  return colorPick(colors, jump);
};

/**
 * Function to pick a color based on the last index.
 * 
 * @param {string[]} colors List of colors.
 * @param {number} jump Number of colors to jump.
 */


var colorPick = function colorPick(colors, jump) {

  var state = rolocState.getInstance();
  if (jump && typeof jump == 'number') {

    state.setLastIndex((state.getLastIndex() + jump) % colors.length);
  } else {

    state.setLastIndex((state.getLastIndex() + 5) % colors.length);
  }

  var color = colors[state.getLastIndex()];

  return color;
};

/**
 * Function for reseting the state of the last index.
 */
var resetRoloc = function resetRoloc() {

  var state = rolocState.getInstance();
  state.setLastIndex(0);
};

/**
 * Roloc color blind funciton that uses grey scale.
 * 
 * @param {number} jump Number of colors to jump.
 */
var rolocColorBlind = function rolocColorBlind(jump) {

  var colors = ['#000000', '#181818', '#383838', '#585858', '#707070', '#909090', '#A9A9A9', '#C0C0C0', '#D8D8D8', '#F0F0F0', '#FFFFFF'];

  return colorPick(colors, jump);
};

exports.resetRoloc = resetRoloc;
exports.rolocColorBlind = rolocColorBlind;
