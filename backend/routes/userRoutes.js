import express from 'express'
const router = express.Router()

import {
    authUser,
    updateUser,
    addAdmin
  } from '../controller/userController.js'

import { protect} from '../middleware/authMiddleware.js'

router.post('/login', authUser)

router.post('/addAdmin',addAdmin)

router
  .route('/:id')
  .put(protect, updateUser)

export default router