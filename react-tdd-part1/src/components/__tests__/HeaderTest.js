import React from 'react';
import Header from '../Header';
import { shallow } from 'enzyme';

describe('App', () => {
  let mountedHeader;
  beforeEach(() => {
    mountedHeader = shallow(<Header />);
  })
  it('renders without crashing', () => {
    const mountedHeader = shallow(<Header />);
  });

  it('should render an image', () => {
    const image = mountedHeader.find('img[src="images/wired-brain-coffee-logo.png"]');
    expect(image).toHaveLength(1);
  })
});
