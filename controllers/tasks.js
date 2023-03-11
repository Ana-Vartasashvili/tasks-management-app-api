import Task from '../models/Task.js'

export const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find()

    res.status(200).json({ tasks })
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    next(error)
  }
}
