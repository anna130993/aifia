const Product = require('../models/product.model');

const loadInitData = async() => {
  const data = [
    {
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
    },{
      name: 'Dress prints',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id lobortis metus, in malesuada lacus. Proin id ornare diam. Nullam sed arcu eget metus venenatis vulputate. Pellentesque consequat ante id eros lobortis porta. Duis ut sagittis lorem, sit amet porta sapien. Proin et maximus est. Donec quis finibus diam, sed auctor arcu. Duis aliquet nunc ut arcu vehicula, in molestie lorem lobortis. Phasellus lobortis tristique blandit.',
      startPrice: 99,
      photos: [{
        name: 'Base - white dress',
        src: 'https://images.pexels.com/photos/6163979/pexels-photo-6163979.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
      name: 'Hoodie prints',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id lobortis metus, in malesuada lacus. Proin id ornare diam. Nullam sed arcu eget metus venenatis vulputate. Pellentesque consequat ante id eros lobortis porta. Duis ut sagittis lorem, sit amet porta sapien. Proin et maximus est. Donec quis finibus diam, sed auctor arcu. Duis aliquet nunc ut arcu vehicula, in molestie lorem lobortis. Phasellus lobortis tristique blandit.',
      startPrice: 120,
      photos: [{
        name: 'Base - white hoodie',
        src: 'https://images.pexels.com/photos/6311503/pexels-photo-6311503.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
      name: 'Leather jacket prints',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id lobortis metus, in malesuada lacus. Proin id ornare diam. Nullam sed arcu eget metus venenatis vulputate. Pellentesque consequat ante id eros lobortis porta. Duis ut sagittis lorem, sit amet porta sapien. Proin et maximus est. Donec quis finibus diam, sed auctor arcu. Duis aliquet nunc ut arcu vehicula, in molestie lorem lobortis. Phasellus lobortis tristique blandit.',
      startPrice: 250,
      photos: [{
        name: 'Base - white leather jacket',
        src: 'https://images.pexels.com/photos/1070970/pexels-photo-1070970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
