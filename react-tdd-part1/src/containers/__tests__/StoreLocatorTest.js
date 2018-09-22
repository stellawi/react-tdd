import React from 'react';
import { shallow } from 'enzyme';
import StoreLocator from '../StoreLocator';
import axios from 'axios';
import renderer from 'react-test-renderer';

describe('StoreLocator', () => {
  let mountedStore;
  beforeEach(() => {
    mountedStore = shallow(<StoreLocator />);
  });

  it('called axios.get in componentDidMount', async () => {
    await mountedStore.instance().componentDidMount();
    expect(axios.get).toHaveBeenCalled();
  });

  it('should render correctly', () => {
    const tree = renderer.create(<StoreLocator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('called axios.get with correct url', async () => {
    await mountedStore.instance().componentDidMount();
    expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/data/shops.json');
  });

  it('should update the state of the component', async () => {
    await mountedStore.instance().componentDidMount();
    expect(mountedStore.state()).toHaveProperty('shops', [{
      'location': 'test-location',
      'address': 'test-address',
    }])
  })

  it('should render storelocator on the page', () => {
    let mountedStore = shallow(<StoreLocator />);
  });

  it('should render header on the page', () => {
    expect(mountedStore.find('Header')).toHaveLength(1);
  });

  it('should render a map on the page', () => {
    expect(mountedStore.find('Map')).toHaveLength(1);
  });

  describe('chooseMap', () => {
    it('should update this.state.currentMap when user click on the button', () => {
      let mockEvent = { target: { value: 'everland' } };
      mountedStore.instance().chooseMap(mockEvent);
      expect(mountedStore.instance().state.currentMap).toEqual('everland.png');
    });
  })
})
