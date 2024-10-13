const express = require('express');
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require('../controllers/products');

// Define routes
router.route('/')
  .post(createProduct) 
  .get(getAllProducts); 

router.route('/:id')
  .get(getProductById)
  .patch(updateProduct) 
  .delete(deleteProduct);

module.exports = router;
