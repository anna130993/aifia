import React from 'react';
import {shallow} from 'enzyme';
import Navigation from './Navigation';

describe('Component Navigation', () => {
  beforeAll(() => {
    const ReactRedux = jest.requireActual('react-redux');
    ReactRedux.useSelector = jest.fn(() => 0);
  });
  it('should render without crashing', () => {
    const component = shallow(<Navigation />);
    expect(component).toBeTruthy();
  });
});
