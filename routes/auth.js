import { Router } from 'express'
import { signup } from '../controllers/auth.js'
import signupSchema from '../schemas/signupSchema.js'

const router = Router()

router.post('/signup', signupSchema, signup)

export default router
