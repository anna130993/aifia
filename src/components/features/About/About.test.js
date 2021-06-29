import React from 'react';
import {shallow} from 'enzyme';
import About from './About';

describe('Component About', () => {
  it('should render without crashing', () =>{
    const component = shallow(<About />);
    expect(component).toBeTruthy();
  });
});
