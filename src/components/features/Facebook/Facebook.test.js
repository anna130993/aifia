import React from 'react';
import {shallow} from 'enzyme';
import Facebook from './Facebook';

describe('Component Facebook', () => {
  it('should render without crashing', () => {
    const component = shallow(<Facebook />);
    expect(component).toBeTruthy();
  });
});
