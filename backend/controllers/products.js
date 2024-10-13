const Product = require('../models/Product');
const { StatusCodes } = require('http-status-codes');

// Create a new product
const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

// Get all products
const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ products, count: products.length });
};

// Get a single product by ID
const getProductById = async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findById(productId);
  
  if (!product) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: `No product with id: ${productId}` });
  }
  res.status(StatusCodes.OK).json({ product });
};

// Update a product
const updateProduct = async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findByIdAndUpdate(productId, req.body, {
    new: true,
    runValidators: true
  });

  if (!product) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: `No product with id: ${productId}` });
  }
  
  res.status(StatusCodes.OK).json({ product });
};

// Delete a product
const deleteProduct = async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findByIdAndDelete(productId);

  if (!product) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: `No product with id: ${productId}` });
  }

  res.status(StatusCodes.OK).json({ message: 'Product deleted' });
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
