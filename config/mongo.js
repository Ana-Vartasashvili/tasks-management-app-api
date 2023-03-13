import mongoose from 'mongoose'

const connectToMongo = async () => {
  try {
    mongoose.set('strictQuery', false)

    return mongoose.connect(process.env.DATABASE_CONNECTION_URL)
  } catch (error) {
    throw new Error(error.message)
  }
}

export default connectToMongo
