import mongoose from 'mongoose'
const { Schema } = mongoose

const taskSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  completed: {
    type: Boolean,
    default: false,
  },

  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
})

export default mongoose.model('Task', taskSchema)
