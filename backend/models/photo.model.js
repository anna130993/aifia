const {Schema, model} = require('mongoose');

const photoSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 70,
  },
  src: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 250,
  },
});

module.exports = {
  Photo: model('Photo', photoSchema),
  photoSchema,
};
