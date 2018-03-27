import roloc, { resetRoloc, rolocColorBlind } from '../random_color';

beforeEach(() => {
  
  resetRoloc();
});

describe('Normal.', () => {
  it('Roloc shall select a color intelligently based on the previous color.', () => {
    
    const color = roloc();
    const color2 = roloc();

    expect(color).toEqual('BlueViolet');
    expect(color2).toEqual('Yellow');
  });

  it('Roloc shall not repeat until it has iterated through all of the colors.', () => {

    let color = roloc();
    let color2;

    let count = 0;
    for (let i = 0; i < 12; i++){
    
      color2 = roloc();
    }

    expect(color2).toEqual(color);
  });

  it('Roloc shall have the ability to jump predefined colors.', () => {


    const color = roloc();
    const color2 = roloc(1);

    expect(color).toEqual('BlueViolet');
    expect(color2).toEqual('Blue');
  });
});

describe('Colorblind.' , () => {

  it('RolocColorBlind shall select a color intelligently based on the previous color.', () => {
    
    const color = rolocColorBlind();
    const color2 = rolocColorBlind();

    expect(color).toEqual('#909090');
    expect(color2).toEqual('#FFFFFF');
  });

  it('Roloc shall not repeat until it has iterated through all of the colors.', () => {

    let color = rolocColorBlind();
    let color2;

    let count = 0;
    for (let i = 0; i < 11; i++){
    
      color2 = rolocColorBlind();
    }

    expect(color2).toEqual(color);
  });
});