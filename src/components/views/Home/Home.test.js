import React from 'react';
import {shallow} from 'enzyme';
import Home from './Home';
import {getAll, getRequest} from '../../../redux/productsRedux';

const products = [{
  name: 'T-shirt prints',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id lobortis metus, in malesuada lacus. Proin id ornare diam. Nullam sed arcu eget metus venenatis vulputate. Pellentesque consequat ante id eros lobortis porta. Duis ut sagittis lorem, sit amet porta sapien. Proin et maximus est. Donec quis finibus diam, sed auctor arcu. Duis aliquet nunc ut arcu vehicula, in molestie lorem lobortis. Phasellus lobortis tristique blandit.',
  startPrice: 50,
  photos: [{
    name: 'Base - white t-shirt',
    src: 'https://images.pexels.com/photos/8148576/pexels-photo-8148576.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },{
    name: 'Fragonard - Swing',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Joean_Honor%C3%A9_Fragonard_-_The_Swing.jpg/800px-Joean_Honor%C3%A9_Fragonard_-_The_Swing.jpg',
  },{
    name: 'Van Gogh - Starry Night',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
  },{
    name: 'Botticelli - Spring',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Botticelli-primavera.jpg/1280px-Botticelli-primavera.jpg',
  },{
    name: 'Delacroix - Liberty Leading the People',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg/1280px-Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg',
  }],
},{
  name: 'Shirt prints',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id lobortis metus, in malesuada lacus. Proin id ornare diam. Nullam sed arcu eget metus venenatis vulputate. Pellentesque consequat ante id eros lobortis porta. Duis ut sagittis lorem, sit amet porta sapien. Proin et maximus est. Donec quis finibus diam, sed auctor arcu. Duis aliquet nunc ut arcu vehicula, in molestie lorem lobortis. Phasellus lobortis tristique blandit.',
  startPrice: 75,
  photos: [{
    name: 'Base - white shirt, variant 1',
    src: 'https://images.pexels.com/photos/3810561/pexels-photo-3810561.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },{
    name: 'Base - white shirt, variant 2',
    src: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },{
    name: 'Fragonard - Swing',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Joean_Honor%C3%A9_Fragonard_-_The_Swing.jpg/800px-Joean_Honor%C3%A9_Fragonard_-_The_Swing.jpg',
  },{
    name: 'Van Gogh - Starry Night',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
  },{
    name: 'Botticelli - Spring',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Botticelli-primavera.jpg/1280px-Botticelli-primavera.jpg',
  },{
    name: 'Delacroix - Liberty Leading the People',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg/1280px-Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg',
  }],
}];

jest.mock('../../../redux/productsRedux', () => ({
  ...jest.requireActual('../../../redux/productsRedux'),
  getAll: jest.fn(),
  getRequest: jest.fn(),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => null,
  useSelector: cb => cb(),
}));

describe('Component Home', () => {
  beforeAll(() => {
    getAll.mockReturnValue(products);
  });

  it('should render without crashing with complete data', () => {
    getRequest.mockReturnValue({active: false, error: false, type: 'GET_ALL'});
    const component = shallow(<Home />);
    expect(component).toBeTruthy();
  });

  it('should render without crashing while awaiting data', () => {
    getRequest.mockReturnValue({active: true, error: false, type: 'GET_ALL'});
    const component = shallow(<Home />);
    expect(component).toBeTruthy();
  });

  it('should render without crashing with data error', () => {
    getRequest.mockReturnValue({active: false, error: true, type: 'GET_ALL'});
    const component = shallow(<Home />);
    expect(component).toBeTruthy();
  });
});
