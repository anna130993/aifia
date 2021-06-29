/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
const {OrderItem} = require('./orderItem.model');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('OrderItem', () => {

  after(() => {
    mongoose.model = {};
  });

  it('should throw an error if there is no product', () => {
    const orderItem = new OrderItem({amount: 1, comment: 'test'});
    orderItem.validate(err => {
      expect(err.errors).to.exist;
    });
  });

  it('should throw an error if "product" is not an ObjectId', () => {
    const cases = [{}, [], 1, 'test'];
    for(let product of cases){
      const orderItem = new OrderItem({
        product,
        amount: 1,
        comment: 'test',
      });

      orderItem.validate(err => {
        expect(err.errors.product).to.exist;
      });
    }
  });

  it('should throw an error if "amount" is not a number', () => {
    const cases = [{}, [], 'test'];
    for(let amount of cases){
      const orderItem = new OrderItem({
        product: '5d9f1140g10a51246cfe4409',
        amount,
        comment: 'test',
      });

      orderItem.validate(err => {
        expect(err.errors.amount).to.exist;
      });
    }
  });

  it('should throw an error if "comment" is not an string', () => {
    const cases = [{}, [], 1, 'test'];
    for(let comment of cases){
      const orderItem = new OrderItem({
        product: '5d9f1140g10a51246cfe4409',
        amount: 1,
        comment,
      });

      orderItem.validate(err => {
        expect(err.errors.comment).to.exist;
      });
    }
  });

  it('should not throw an error when all props are correct', () => {
    const orderItem = new OrderItem({
      product: '5d9f1140g10a51246cfe4409',
      amount: 1,
      comment: 'test',
    });

    orderItem.validate(err => {
      expect(err).to.not.exist;
    });
  });
});
