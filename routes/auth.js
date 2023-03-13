import { Router } from 'express'
import { signup, login } from '../controllers/auth.js'
import signupSchema from '../schemas/signupSchema.js'
import validateRequest from '../middlewares/validateRequest.js'
import loginSchema from '../schemas/loginSchema.js'

const router = Router()

router.post('/signup', signupSchema, validateRequest, signup)
router.post('/login', loginSchema, validateRequest, login)

export default router
