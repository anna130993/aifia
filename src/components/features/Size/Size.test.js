import React from 'react';
import {shallow} from 'enzyme';
import Size from './Size';

describe('Component Size', () => {
  it('should render without crashing', () => {
    const component = shallow(<Size />);
    expect(component).toBeTruthy();
  });
});
