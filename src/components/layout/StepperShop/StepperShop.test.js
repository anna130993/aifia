import React from 'react';
import {shallow} from 'enzyme';
import StepperShop from './StepperShop';

describe('Component StepperShop', () => {
  it('should render withour crashing', () => {
    beforeAll(() => {
      const ReactRedux = jest.requireActual('react-redux');
      ReactRedux.useSelector = jest.fn(() => []);
    });

    const component = shallow(<StepperShop />);
    expect(component).toBeTruthy();
  });
});
