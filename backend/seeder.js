//Just an extra js file to add sample data to database for testing

import mongoose from 'mongoose'
import dotenv from 'dotenv'
import user from './data/user.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import connectDB from './config/db.js'

dotenv.config()

await connectDB()

const importData = async () => {
  try {
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insert(user)

    await Product.insertMany(products)

    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
