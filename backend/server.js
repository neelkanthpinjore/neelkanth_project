import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import cors from'cors'

import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

dotenv.config()

await connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use('/api/products', productRoutes)
app.use('/api/user', userRoutes)
app.use('/api/upload', uploadRoutes)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

 const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running on port ${PORT}`
  )
)