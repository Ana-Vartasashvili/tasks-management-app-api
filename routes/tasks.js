import { Router } from 'express'
import { getTasks, createTask, updateTask } from '../controllers/tasks.js'

const router = Router()

router.get('/', getTasks)
router.post('/', createTask)
router.put('/:taskId', updateTask)

export default router
