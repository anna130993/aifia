import React from 'react';
import {shallow} from 'enzyme';
import MainMenu from './MainMenu';

describe('Component MainMenu', () => {
  it('should render without crashing', () => {
    const component = shallow(<MainMenu />);
    expect(component).toBeTruthy();
  });
});
