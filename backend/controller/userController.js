import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import User from '../models/userModel.js'
//import {generateToken} from '../utils/generateToken'

dotenv.config()

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '5d',
  })
}

// @desc    Update user
// @route   PUT /api/user/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
  
    if (user) {
      user.email = req.body.email || user.email
      user.password = req.body.password
  
      const updatedUser = await user.save()
  
      res.json({
        _id: updatedUser._id,
        email: updatedUser.email,
      })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })

// @desc    Auth user & get token
// @route   POST /api/user/login
// @access  Public
  const authUser = asyncHandler(async (req, res) => {
    
    const { email, password } = req.body
  
    const user = await User.findOne({ email })
  
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        email: user.email,
        token: generateToken(user._id)
      })
    } else {
      res.status(401)
      throw new Error('Invalid email or password')
    }
  })

  // @desc    Add admin
// @route   POST /api/user/addAdmin
// @access  Public

 const addAdmin=asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    email,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

  export {
    authUser,
    updateUser,
    addAdmin
  }