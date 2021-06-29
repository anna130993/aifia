const {Schema, model} = require('mongoose');
const {photoSchema} = require('./photo.model');

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 30,
  },
  description: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 3000,
  },
  startPrice: {
    type: Number,
    required: true,
    minLength: 1,
    maxLength: 1000,
  },
  photos: {
    type: [photoSchema],
    validate: {
      validator: v => Array.isArray(v) && v.length > 0,
    },
    required: true,
  },
});

module.exports = model('Product', productSchema);
