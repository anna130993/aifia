import React from 'react';
import {shallow} from 'enzyme';
import {ScrollUp} from './ScrollUp';

describe('Component ScrollUp', () => {
  it('should render without crashing', () => {
    const component = shallow(<ScrollUp />);
    expect(component).toBeTruthy();
  });
});
