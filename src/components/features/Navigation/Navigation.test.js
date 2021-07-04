import React from 'react';
import {shallow} from 'enzyme';
import Navigation from './Navigation';

describe('Component Navigation', () => {
  it('should render without crashing', () => {
    const component = shallow(<Navigation />);
    expect(component).toBeTruthy();
  });
});
