import { Router } from 'express'
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from '../controllers/tasks.js'

const router = Router()

router.get('/', getTasks)
router.post('/', createTask)
router.put('/:taskId', updateTask)
router.delete('/:taskId', deleteTask)

export default router
