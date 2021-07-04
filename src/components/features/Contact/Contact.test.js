import React from 'react';
import {shallow} from 'enzyme';
import Contact from './Contact';

const mockProps = {
  order: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  },
};

describe('Component Contact', () => {
  it('should render without crashing', () => {
    const component = shallow(<Contact {...mockProps} />);
    expect(component).toBeTruthy();
  });
});
