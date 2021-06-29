/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer;
const mongoose = require('mongoose');
const expect = require('chai').expect;
const Order = require('../orderForm.model');

describe('Order', () => {
  before(async () => {
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

  describe('Create data', () => {
    after(async () => {
      await Order.deleteMany();
    });

    it('should add new document with "save"', async() => {
      const order = new Order({
        products: [{amount: 1, product: '5d9f1140g10a51246cfe4409', comment: 'test'}],
        firstName: 'Meredith',
        lastName: 'Grey',
        email: 'greys@example.com',
        address: 'Seattle',
      });

      await order.save();
      expect(order.isNew).to.be.false;
    });
  });
});
