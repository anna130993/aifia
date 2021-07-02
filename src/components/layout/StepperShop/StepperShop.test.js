import React from 'react';
import {shallow} from 'enzyme';
import StepperShop from './StepperShop';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useLocation} from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));

jest.mock('@material-ui/core/useMediaQuery', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Component StepperShop', () => {

  beforeAll(() => {
    const ReactRedux = jest.requireActual('react-redux');
    ReactRedux.useSelector = jest.fn(() => {});
  });

  it('should render withour crashing with cart active', () => {
    useMediaQuery.mockReturnValueOnce(true);
    useLocation.mockReturnValueOnce({pathname: '/cart'});
    const component = shallow(<StepperShop />);
    expect(component).toBeTruthy();
  });

  it('should render withour crashing with order active', () => {
    useMediaQuery.mockReturnValueOnce(true);
    useLocation.mockReturnValueOnce({pathname: '/order'});
    const component = shallow(<StepperShop />);
    expect(component).toBeTruthy();
  });

  it('should render withour crashing on mobile', () => {
    useMediaQuery.mockReturnValueOnce(false);
    useLocation.mockReturnValueOnce({pathname: '/cart'});
    const component = shallow(<StepperShop />);
    expect(component).toBeTruthy();
  });
});
