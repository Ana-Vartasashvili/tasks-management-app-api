import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import { config } from 'dotenv'
import tasksRoutes from './routes/tasks.js'
import authRoutes from './routes/auth.js'
import errorHandler from './middlewares/errorHandler.js'
import connectToMongo from './config/mongo.js'

const app = express()

config()
connectToMongo()

app.use(bodyParser.json())

app.use('/tasks', tasksRoutes)
app.use('/auth', authRoutes)

app.use(errorHandler)

app.listen(8000, () => {
  console.log('Server started on port 8000')
})
