import React from 'react';
import {shallow} from 'enzyme';
import Returns from './Returns';

describe('Component Returns', () => {
  it('should render without crashing', () => {
    const component = shallow(<Returns />);
    expect(component).toBeTruthy();
  });
});
