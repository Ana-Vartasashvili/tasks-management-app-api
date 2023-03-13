import express from 'express'
import bodyParser from 'body-parser'
import { config } from 'dotenv'
import tasksRoutes from './routes/tasks.js'
import authRoutes from './routes/auth.js'
import errorHandler from './middlewares/errorHandler.js'
import connectToMongo from './config/mongo.js'
import isAuth from './middlewares/isAuth.js'

const app = express()

config()
connectToMongo()

app.use(bodyParser.json())

app.use('/tasks', isAuth, tasksRoutes)
app.use('/auth', authRoutes)

app.use(errorHandler)

app.listen(8000, () => {
  console.log('Server started on port 8000')
})
