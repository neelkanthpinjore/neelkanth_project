import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
  getProductsByCategory,
  deleteProduct,
  createProduct
} from '../controller/productController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts).post(protect, createProduct)

router
  .route('/:id')
  .get(getProductById)
  .delete(protect, deleteProduct)

router
  .route('/:category')
  .post(getProductsByCategory)

export default router
