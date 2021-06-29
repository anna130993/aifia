import React from 'react';
import {shallow} from 'enzyme';
import Google from './Google';

describe('Component Google', () => {
  it('should render without crashing', () => {
    const component = shallow(<Google />);
    expect(component).toBeTruthy();
  });
});
