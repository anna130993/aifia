/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const Order = require('./orderForm.model');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('Order', () => {
  after(() => {
    mongoose.models = {};
  });

  it('should throw an error if any required arg is missing', () => {
    const cases = [
      {
        firstName: 'Meredith',
        lastName: 'Grey',
        email: 'greys@example.com',
        address: 'Seattle',
      },{
        products: [{amount: 1, product: '5d9f1140g10a51246cfe4409', comment: 'test'}],
        lastName: 'Grey',
        email: 'greys@example.com',
        address: 'Seattle',
      },{
        products: [{amount: 1, product: '5d9f1140g10a51246cfe4409', comment: 'test'}],
        firstName: 'Meredith',
        email: 'greys@example.com',
        address: 'Seattle',
      },{
        products: [{amount: 1, product: '5d9f1140g10a51246cfe4409', comment: 'test'}],
        firstName: 'Meredith',
        lastName: 'Grey',
        address: 'Seattle',
      },{
        products: [{amount: 1, product: '5d9f1140g10a51246cfe4409', comment: 'test'}],
        firstName: 'Meredith',
        lastName: 'Grey',
        email: 'greys@example.com',
      },
    ];

    for(let prop of cases) {
      const order = new Order(prop);

      order.validate(err => {
        expect(err.errors).to.exist;
      });
    }
  });

  it('should throw an error if "firstName" is not a string', () => {
    const cases = [{}, []];
    for(let firstName of cases) {
      const order = new Order({
        products: [{amount: 1, product: '5d9f1140g10a51246cfe4409', comment: 'test'}],
        firstName,
        lastName: 'Grey',
        email: 'greys@example.com',
        address: 'Seattle',
      });

      order.validate(err => {
        expect(err.errors.firstName).to.exist;
      });
    }
  });

  it('should throw an error if "lastName" is not a string', () => {
    const cases = [{}, []];
    for(let lastName of cases) {
      const order = new Order({
        products: [{amount: 1, product: '5d9f1140g10a51246cfe4409', comment: 'test'}],
        firstName: 'Meredith',
        lastName,
        email: 'greys@example.com',
        address: 'Seattle',
      });

      order.validate(err => {
        expect(err.errors.lastName).to.exist;
      });
    }
  });
  it('should throw an error if "address" is not a string', () => {
    const cases = [{}, []];
    for(let address of cases) {
      const order = new Order({
        products: [{amount: 1, product: '5d9f1140g10a51246cfe4409', comment: 'test'}],
        firstName: 'Meredith',
        lastName: 'Grey',
        email: 'greys@example.com',
        address,
      });

      order.validate(err => {
        expect(err.errors.address).to.exist;
      });
    }
  });
  it('should throw an error if "email" is not a valid email', () => {
    const cases = ['annie', 'sdfs@', '@dfffffffsds.fd'];
    for(let email of cases) {
      const order = new Order({
        products: [{amount: 1, product: '5d9f1140g10a51246cfe4409', comment: 'test'}],
        firstName: 'Meredith',
        lastName: 'Grey',
        email,
        address: 'Seattle',
      });

      order.validate(err => {
        expect(err.errors.email).to.exist;
      });
    }
  });
  it('should throw an error if "products" is not a non-empty array', () => {
    const cases = ['test', 5, []];
    for(let products of cases) {
      const order = new Order({
        products,
        firstName: 'Meredith',
        lastName: 'Grey',
        email: 'greys@example.com',
        address: 'Seattle',
      });

      order.validate(err => {
        expect(err.errors.products).to.exist;
      });
    }
  });
  it('should not throw an error when all props are correct', () => {
    const order = new Order({
      products: [{amount: 1, product: '5d9f1140g10a51246cfe4409', comment: 'test'}],
      firstName: 'Meredith',
      lastName: 'Grey',
      email: 'greys@example.com',
      address: 'Seattle',
    });

    order.validate(err => {
      expect(err).to.not.exist;
    });
  });
});
