import React from 'react';
import {shallow} from 'enzyme';
import Copyright from './Copyright';

describe('Component Copyright', () => {
  it('should render without crashing', () => {
    const component = shallow(<Copyright />);
    expect(component).toBeTruthy();
  });
});
