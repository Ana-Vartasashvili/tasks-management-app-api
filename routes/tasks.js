import { Router } from 'express'
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from '../controllers/tasks.js'
import isAuth from '../middlewares/isAuth.js'

const router = Router()

router.get('/', isAuth, getTasks)
router.post('/', isAuth, createTask)
router.put('/:taskId', isAuth, updateTask)
router.delete('/:taskId', isAuth, deleteTask)

export default router
