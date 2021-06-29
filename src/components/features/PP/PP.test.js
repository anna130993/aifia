import React from 'react';
import {shallow} from 'enzyme';
import PP from './PP';

describe('Component PP', () => {
  it('should render without crashing', () => {
    const component = shallow(<PP />);
    expect(component).toBeTruthy();
  });
});
