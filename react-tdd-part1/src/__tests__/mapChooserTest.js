import mapChooser from '../mapChooser';

describe('mapChooser', () => {
  it('should render an image file based on the input', () => {
    const expected = 'imageName.png';
    const actual = mapChooser('imageName');
    expect(actual).toEqual(expected);
  });
}); 
