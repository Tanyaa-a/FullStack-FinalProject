const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide the product name'],
    maxlength: 100
  },
  price: {
    type: Number,
    required: [true, 'Please provide the product price']
  },
  description: {
    type: String,
    maxlength: 500
  },
  brand: {
    type: String,
    required: [true, 'Please provide the product brand']
  },
  stock: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    enum: ['coffee', 'accessories', 'equipment'], // Example categories
    default: 'coffee'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
