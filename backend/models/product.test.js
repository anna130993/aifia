/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
const Product = require('./product.model');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('Product', () => {
  after(() => {
    mongoose.model = {};
  });

  it('should throw an error if any req arg is missing', () => {
    const cases = [
      {
        name: 'test',
        description: 'Lorem ipsum',
        photos: [{name: 'xyz', src:'xyz.jpg'}],
      },{
        name: 'test',
        startPrice: 79,
        photos: [{name: 'xyz', src:'xyz.jpg'}],
      },{
        description: 'Lorem ipsum',
        startPrice: 79,
        photos: [{name: 'xyz', src:'xyz.jpg'}],
      },{
        name: 'test',
        description: 'Lorem ipsum',
        startPrice: 79,
      },
    ];

    for(let prop of cases){
      const product = new Product(prop);

      product.validate(err => {
        expect(err.errors).to.exist;
      });
    }
  });

  it('should throw an error if "name" is not a string', () => {
    const cases = [{}, []];
    for (let name of cases) {
      const product = new Product({
        name,
        description: 'Lorem ipsum',
        startPrice: 79,
        photos: [{name: 'xyz', src:'xyz.jpg'}],
      });

      product.validate(err => {
        expect(err.errors.name).to.exist;
      });
    }
  });

  it('should throw an error if "description" is not a string', () => {
    const cases = [{}, []];
    for (let description of cases) {
      const product = new Product({
        name: 'test',
        description,
        startPrice: 79,
        photos: [{name: 'xyz', src:'xyz.jpg'}],
      });

      product.validate(err => {
        expect(err.errors.description).to.exist;
      });
    }
  });

  it('should throw an error if "startPrice" is not a number', () => {
    const cases = [{}, [], 'test'];
    for (let startPrice of cases) {
      const product = new Product({
        name: 'test',
        description: 'Lorem ipsum',
        startPrice,
        photos: [{name: 'xyz', src:'xyz.jpg'}],
      });

      product.validate(err => {
        expect(err.errors.startPrice).to.exist;
      });
    }
  });

  it('should throw an error if "photos" is not a non-empty array', () => {
    const cases = ['test', 20, []];
    for (let photos of cases) {
      const product = new Product({
        name: 'test',
        description: 'Lorem ipsum',
        startPrice: 79,
        photos,
      });

      product.validate(err => {
        expect(err.errors.photos).to.exist;
      });
    }
  });

  it('should not throw an error when all props are correct', () => {
    const product = new Product({
      name: 'test',
      description: 'Lorem ipsum',
      startPrice: 79,
      photos: [{name: 'xyz', src:'xyz.jpg'}],
    });

    product.validate(err => {
      expect(err).to.not.exist;
    });
  });
});
