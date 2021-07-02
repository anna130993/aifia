import React from 'react';
import {shallow} from 'enzyme';
import {PhoneModel} from './PhoneModel';

describe('Component PhoneModel', () => {
  it('should render without crashing', () => {
    const component = shallow(<PhoneModel />);
    expect(component).toBeTruthy();
  });
});
