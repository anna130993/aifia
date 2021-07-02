import React from 'react';
import {shallow} from 'enzyme';
import Payment from './Payment';

describe('Component Payment', () => {
  it('should render without crashing', () => {
    const component = shallow(<Payment />);
    expect(component).toBeTruthy();
  });
});
