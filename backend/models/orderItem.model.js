const {Schema, model} = require('mongoose');

const orderItemSchema = new Schema({
  product: {type: Schema.Types.ObjectId, ref: 'Product', required: true},
  amount: {
    type: Number,
    default: 1,
    min: 1,
    max: 25,
  },
  comment: {
    type: String,
    maxLength: 350,
  },
});

module.exports = {
  OrderItem: model('OrderItem', orderItemSchema),
  orderItemSchema,
};