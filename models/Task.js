import mongoose from 'mongoose'
const { Schema } = mongoose

const taskSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  completed: {
    type: Boolean,
  },
})

export default mongoose.model('Task', taskSchema)
