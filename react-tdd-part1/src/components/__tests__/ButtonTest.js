import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('Button', () => {
  let mountedButton;
  beforeEach(() => {
    mountedButton = shallow(<Button />);
  })
  it('should render on the page', () => {
    let mountedButton = shallow(<Button />);
  });

  it('should render a button on the page', () => {
    const button = mountedButton.find('button');
    expect(button).toHaveLength(1);
  });

  it('should call a function pass to it', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<Button handleClick={mockCallBack} />);
    wrapper.simulate('click');
    expect(mockCallBack.mock.calls.length).toBe(1);
  });
})

describe('when a location passed to it', () => {
  it('display the location', () => {
    const props = {
      location: 'portland'
    }
    const mountedButton = shallow(<Button {...props} />);
    expect(mountedButton.text()).toEqual('portland');
  })

  it('set the value of the button to the location', () => {
    const props = {
      location: 'portland'
    }
    const mountedButton = shallow(<Button {...props} />);
    expect(mountedButton.prop('value')).toEqual('portland');
  })
});

describe('when location is undefined', () => {
  it('display the All Location on the button', () => {
    const props = {
      location: undefined
    }
    const mountedButton = shallow(<Button {...props} />);
    expect(mountedButton.text()).toEqual('All Location');
  })
});