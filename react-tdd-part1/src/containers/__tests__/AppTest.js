import React from 'react';
import App from '../App';
import {shallow} from 'enzyme';

describe('App', () => {
  it('renders without crashing', () => {
    const mountedApp = shallow(<App />);
    expect(mountedApp).toHaveLength(1);
  });

  it('renders a storeLocator', () => {
    const mountedApp = shallow(<App />);
    expect(mountedApp.find('StoreLocator')).toHaveLength(1);
  })
});
