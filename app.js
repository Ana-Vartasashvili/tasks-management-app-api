import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import { config } from 'dotenv'
import tasksRoutes from './routes/tasks.js'

const app = express()

config()
const DATABASE_URL = process.env.DATABASE_CONNECTION_URL

app.use(bodyParser.json())

app.use('/tasks', tasksRoutes)
// app.use('/auth', authRoutes)

try {
  mongoose.connect(DATABASE_URL)
  app.listen(8000)
} catch (error) {
  console.log(error)
}
