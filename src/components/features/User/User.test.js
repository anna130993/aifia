import React from 'react';
import {shallow} from 'enzyme';
import User from './User';

describe('Component User', () => {
  it('should render without crashing', () => {
    const component = shallow(<User />);
    expect(component).toBeTruthy();
  });
});
