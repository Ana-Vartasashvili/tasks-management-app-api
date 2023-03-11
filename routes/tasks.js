import { Router } from 'express'
import { getTasks, createTask } from '../controllers/tasks.js'

const router = Router()

router.get('/', getTasks)

export default router
