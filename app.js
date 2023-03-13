import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import { config } from 'dotenv'
import tasksRoutes from './routes/tasks.js'
import authRoutes from './routes/auth.js'

const app = express()

config()
const DATABASE_URL = process.env.DATABASE_CONNECTION_URL

app.use(bodyParser.json())

app.use('/tasks', tasksRoutes)
app.use('/auth', authRoutes)

app.use((error, req, res, next) => {
  console.log(error)
  const status = error.statusCode || 500
  const message = error.message
  const data = error.data
  res.status(status).json({
    message,
    data,
  })
})

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

try {
  mongoose.connect(DATABASE_URL)
  app.listen(8000)
} catch (error) {
  console.log(error)
}
