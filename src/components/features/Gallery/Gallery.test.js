import React from 'react';
import {shallow} from 'enzyme';
import Gallery from './Gallery';

describe('Component Gallery', () => {
  it('should render without crashing', () => {
    const images = [{
      name: 'Fragonard - Swing',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Joean_Honor%C3%A9_Fragonard_-_The_Swing.jpg/800px-Joean_Honor%C3%A9_Fragonard_-_The_Swing.jpg',
    },{
      name: 'Van Gogh - Starry Night',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
    },{
      name: 'Botticelli - Spring',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Botticelli-primavera.jpg/1280px-Botticelli-primavera.jpg',
    },
    ];
    const component = shallow(<Gallery images={images}/>);
    expect(component).toBeTruthy();
  });
});
