const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');

router.get('/products', async(req, res) => {
  try {
    await Product.find({}, (err, products) => {
      if (err) res.status(500).json(err);
      if (products) {
        res.header('Cache-Control', 'max-age=7200').json(products.map(({_id, name, startPrice, photos}) => (
          {_id, name, startPrice, mainPhoto: {
            name: photos[0].name,
            src: photos[0].src,
          }}
        )));
      } else res.status(404).json({ product: 'Not found'});
    });
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/products/:id', async(req, res) => {
  try {
    const result = await Product.findById(req.params.id);
    if (!result) res.status(404).json({product: 'Not found'});
    else res.json(result);
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
