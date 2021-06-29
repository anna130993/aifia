import React from 'react';
import {shallow} from 'enzyme';
import ProductBox from './ProductBox';

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    const product = {
      id: 'xyz878',
      name: 'basic white t-shirt',
      startPrice: 50,
      mainPhoto: {
        src: 'dgfsdfs.jpg',
        name: 'photo',
      },
    };
    const component = shallow(<ProductBox product={product}/>);
    expect(component).toBeTruthy();
  });
});
