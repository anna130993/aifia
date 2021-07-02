import React from 'react';
import {shallow} from 'enzyme';
import Shipping from './Shipping';

describe('Component Shipping', () => {
  it('should render without crashing', () => {
    const component = shallow(<Shipping />);
    expect(component).toBeTruthy();
  });
});
