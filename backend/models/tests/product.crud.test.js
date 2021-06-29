/* eslint-disable no-undef */
const MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer;
const mongoose = require('mongoose');
const expect = require('chai').expect;
const Product = require('../product.model');

describe('Product', () => {
  before(async() => {
    try {
      const fakeDB = new MongoMemoryServer();
      const uri = await fakeDB.getUri();
      mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
    } catch(err) {
      console.log(err);
    }
  });

  after(async() => {
    await mongoose.disconnect();
  });

  describe('Read data', () => {
    before(async() => {
      const dummyProd1 = new Product({
        name: 'Prod1',
        description: 'test',
        startPrice: 5,
        photos: [{
          name: 'xyz',
          src: 'https://images.pexels.com/photos/1070970/pexels-photo-1070970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }],
      });
      await dummyProd1.save();

      const dummyProd2 = new Product({
        name: 'Prod2',
        description: 'test',
        startPrice: 5,
        photos: [{
          name: 'xyz',
          src: 'https://images.pexels.com/photos/1070970/pexels-photo-1070970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }],
      });
      await dummyProd2.save();
    });

    after(async() => {
      await Product.deleteMany();
    });

    it('should return all data with "find"', async() => {
      const products = await Product.find();
      const expectLength = 2;
      expect(products.length).to.be.equal(expectLength);
    });

    it('should return proper doc by various params with "findOne"', async() => {
      const expectProd = {
        name: 'Prod1',
        description: 'test',
        startPrice: 5,
      };

      for(let key in expectProd) {
        const value = expectProd[key];
        const product = await Product.findOne({ [key]: value});
        expect(product.performer).to.be.equal(expectProd.performer);
      }
    });
  });
});
