const {Schema, model} = require('mongoose');
const {orderItemSchema} = require('./orderItem.model');

const orderSchema = new Schema({
  products: {
    type: [orderItemSchema],
    validate: {
      validator: v => Array.isArray(v) && v.length > 0,
    },
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 12,
  },
  lastName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 20,
  },
  email: {
    type: String,
    required: true,
    match: new RegExp(/^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.([a-z]{1,6}))$/i),
  },
  phone: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 15,
  },
  address: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 75,
  },
  status: {
    type: String,
    required: true,
    enum: ['ordered', 'new'],
  },
});

module.exports = model('Order', orderSchema);
