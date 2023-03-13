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

export const updateTask = async (req, res, next) => {
  const taskId = req.params.taskId
  const tasks = await Task.find()

  try {
    const { name, completed } = req.body
    const task = await Task.findById(taskId)

    if (!task) {
      const error = new Error('Could not find task.')
      error.statusCode = 404
      throw error
    }

    task.name = name
    task.completed = completed || false

    const updatedTask = await task.save()

    res.status(200).json({
      message: 'Task updated successfully',
      task: updatedTask,
      tasks,
    })
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    next(error)
  }
}

export const deleteTask = async (req, res, next) => {
  const taskId = req.params.taskId

  try {
    const task = await Task.findByIdAndRemove(taskId)
    const tasks = await Task.find()
    res.status(200).json({ message: 'Task deleted successfully.', tasks })
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    next(error)
  }
}
