# roloc
A library that selects a color from a list of the primary and secondary colors (or grey scale in color blind mode) with a high contrast.

# Install
Install by running the npm install command.
```npm i --save roloc```

# Usage
Basic usage
```
import roloc from 'roloc'; // ES6
// var roloc = require('roloc').default // ES5;

const style = {
  name : {
    display: 'flex',
    backgroundColor: roloc(), // Default: Pull a color from the list of colors.
    
  },
  picture: {
    display: 'flex',
    backgroundColor: roloc(2) // Passed optional parameter to jump 2 colors in the list of colors.
  }
}

/**
ES5 compatible
module.exports = function(props) {
  return (
    <div className='bioCard' style={{backgroundColor: roloc()}}>
      <div className='name' style={style.name}></div>
      <div className='picture' style={style.picture}></div>
    </div>
  )
}
*/

// ES6
export default (props) => (
  <div className='bioCard' style={{backgroundColor: roloc()}}>
    <div className='name' style={style.name}></div>
    <div className='picture' style={style.picture}></div>
  </div>
);
```

Colorblind Usage
```
import { rolocColorBlind } from 'roloc'; // ES6

const style = {
  name : {
    display: 'flex',
    backgroundColor: rolocColorBlind(), // Use the color blind version of the function that uses black and white gradients.
  }
}
```

## Special thanks
Thanks to [Gantman](https://github.com/GantMan) for helping come up with ideas on this project.