import React from 'react';
import { shallow } from 'enzyme';
import Map from '../Map';

describe('#Map', () => {
  let mountedMap;
  beforeEach(() => {
    const props = {
      location: undefined,
      imageName: 'testmap.png'
    }
    mountedMap = shallow(<Map {...props} />);
  })
  it('should render on the page', () => {
    let mountedMap = shallow(<Map />);
  });

  it('should contains an image', () => {
    const image = mountedMap.find('img');
    expect(image).toHaveLength(1);
  });

  it('should display none map when no params is given', () => {
    //As defaultMap is only display when there is no props passed;
    //As we have included prop in this component at the beforeEach
    const defaultMap = shallow(<Map />)
    const image = defaultMap.find('img[src="images/none.png"]');
    expect(image).toHaveLength(1);
  });

  it('should display map when given a param', () => {
    const testMap = mountedMap.find('img[src="images/testmap.png"]');
    expect(testMap).toHaveLength(1);
  });
});

