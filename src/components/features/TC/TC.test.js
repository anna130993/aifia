import React from 'react';
import {shallow} from 'enzyme';
import TC from './TC';

describe('Component TC', () => {
  it('should render without crashing', () => {
    const component = shallow(<TC />);
    expect(component).toBeTruthy();
  });
});
