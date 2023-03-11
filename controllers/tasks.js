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

export const createTask = async (req, res, next) => {
  const tasks = await Task.find()

  try {
    const { name } = req.body
    const task = new Task({
      name,
    })

    const newTask = await task.save()

    res.status(201).json({
      message: 'New task created successfully',
      task: newTask,
      tasks,
    })
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    next(error)
  }
}
