import React from 'react';
import {shallow} from 'enzyme';
import StepperShop from './StepperShop';

describe('Component StepperShop', () => {
  it('should render withour crashing', () => {
    const component = shallow(<StepperShop />);
    expect(component).toBeTruthy();
  });
});
