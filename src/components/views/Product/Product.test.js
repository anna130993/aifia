import React from 'react';
import {shallow} from 'enzyme';
import {Route, MemoryRouter} from 'react-router-dom';
import Product from './Product';


describe('Component Product', () => {
  beforeAll(() => {
    const ReactRedux = jest.requireActual('react-redux');
    ReactRedux.useDispatch = jest.fn(() => null);
    ReactRedux.useSelector = jest.fn(() => []);
  });

  it('should render without crashing', () => {
    const component = shallow(
      <MemoryRouter initialEntries={['products/hsbdjf67t']}>
        <Route path='/products/:id'>
          <Product />
        </Route>
      </MemoryRouter>);
    expect(component).toBeTruthy();
  });
});
