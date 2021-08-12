const Product = require('../models/product.model');

const loadInitData = async() => {
  const data = [
    {
      name: 'T-shirt prints',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id lobortis metus, in malesuada lacus. Proin id ornare diam. Nullam sed arcu eget metus venenatis vulputate. Pellentesque consequat ante id eros lobortis porta. Duis ut sagittis lorem, sit amet porta sapien. Proin et maximus est. Donec quis finibus diam, sed auctor arcu. Duis aliquet nunc ut arcu vehicula, in molestie lorem lobortis. Phasellus lobortis tristique blandit.',
      startPrice: 50,
      photos: [{
        name: 'Base - white t-shirt',
        src: '../../public/images/white-ts.jpeg',
      },{
        name: 'Fragonard - Swing',
        src: '../../public/images/fragonard.jpeg',
      },{
        name: 'Van Gogh - Starry Night',
        src: '../../public/images/vangogh.jpeg',
      },{
        name: 'Botticelli - Spring',
        src: '../../public/images/botticelli.jpeg',
      },{
        name: 'Delacroix - Liberty Leading the People',
        src: '../../public/images/delacroix.jpeg',
      }],
    },{
      name: 'Shirt prints',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id lobortis metus, in malesuada lacus. Proin id ornare diam. Nullam sed arcu eget metus venenatis vulputate. Pellentesque consequat ante id eros lobortis porta. Duis ut sagittis lorem, sit amet porta sapien. Proin et maximus est. Donec quis finibus diam, sed auctor arcu. Duis aliquet nunc ut arcu vehicula, in molestie lorem lobortis. Phasellus lobortis tristique blandit.',
      startPrice: 75,
      photos: [{
        name: 'Base - white shirt',
        src: '../../public/images/white-shirt.jpeg',
      },{
        name: 'Fragonard - Swing',
        src: '../../public/images/fragonard.jpeg',
      },{
        name: 'Van Gogh - Starry Night',
        src: '../../public/images/vangogh.jpeg',
      },{
        name: 'Botticelli - Spring',
        src: '../../public/images/botticelli.jpeg',
      },{
        name: 'Delacroix - Liberty Leading the People',
        src: '../../public/images/delacroix.jpeg',
      }],
    },{
      name: 'Dress prints',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id lobortis metus, in malesuada lacus. Proin id ornare diam. Nullam sed arcu eget metus venenatis vulputate. Pellentesque consequat ante id eros lobortis porta. Duis ut sagittis lorem, sit amet porta sapien. Proin et maximus est. Donec quis finibus diam, sed auctor arcu. Duis aliquet nunc ut arcu vehicula, in molestie lorem lobortis. Phasellus lobortis tristique blandit.',
      startPrice: 99,
      photos: [{
        name: 'Base - white dress',
        src: '../../public/images/white-dress.jpeg',
      },{
        name: 'Fragonard - Swing',
        src: '../../public/images/fragonard.jpeg',
      },{
        name: 'Van Gogh - Starry Night',
        src: '../../public/images/vangogh.jpeg',
      },{
        name: 'Botticelli - Spring',
        src: '../../public/images/botticelli.jpeg',
      },{
        name: 'Delacroix - Liberty Leading the People',
        src: '../../public/images/delacroix.jpeg',
      }],
    },{
      name: 'Hoodie prints',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id lobortis metus, in malesuada lacus. Proin id ornare diam. Nullam sed arcu eget metus venenatis vulputate. Pellentesque consequat ante id eros lobortis porta. Duis ut sagittis lorem, sit amet porta sapien. Proin et maximus est. Donec quis finibus diam, sed auctor arcu. Duis aliquet nunc ut arcu vehicula, in molestie lorem lobortis. Phasellus lobortis tristique blandit.',
      startPrice: 120,
      photos: [{
        name: 'Base - white hoodie',
        src: '../../public/images/white-hoode.jpeg',
      },{
        name: 'Fragonard - Swing',
        src: '../../public/images/fragonard.jpeg',
      },{
        name: 'Van Gogh - Starry Night',
        src: '../../public/images/vangogh.jpeg',
      },{
        name: 'Botticelli - Spring',
        src: '../../public/images/botticelli.jpeg',
      },{
        name: 'Delacroix - Liberty Leading the People',
        src: '../../public/images/delacroix.jpeg',
      }],
    },{
      name: 'Leather jacket prints',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id lobortis metus, in malesuada lacus. Proin id ornare diam. Nullam sed arcu eget metus venenatis vulputate. Pellentesque consequat ante id eros lobortis porta. Duis ut sagittis lorem, sit amet porta sapien. Proin et maximus est. Donec quis finibus diam, sed auctor arcu. Duis aliquet nunc ut arcu vehicula, in molestie lorem lobortis. Phasellus lobortis tristique blandit.',
      startPrice: 250,
      photos: [{
        name: 'Base - white leather jacket',
        src: '../../public/images/white-jacket.jpeg',
      },{
        name: 'Fragonard - Swing',
        src: '../../public/images/fragonard.jpeg',
      },{
        name: 'Van Gogh - Starry Night',
        src: '../../public/images/vangogh.jpeg',
      },{
        name: 'Botticelli - Spring',
        src: '../../public/images/botticelli.jpeg',
      },{
        name: 'Delacroix - Liberty Leading the People',
        src: '../../public/images/delacroix.jpeg',
      }],
    },
  ];

  try {
    let count = await Product.countDocuments();
    if (count === 0) {
      console.log('No products available. Test data loading');
      await Product.create(data);
      console.log('Test data has been successfully loaded');
    }
  } catch(err) {
    console.log('Could not load test data! Sorry!', err);
  }
};

module.exports = loadInitData;
