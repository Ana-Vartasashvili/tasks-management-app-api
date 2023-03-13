import { Router } from 'express'
import { signup } from '../controllers/auth.js'
import signupSchema from '../schemas/signupSchema.js'
import validateRequest from '../middlewares/validateRequest.js'

const router = Router()

router.post('/signup', signupSchema, validateRequest, signup)

export default router
