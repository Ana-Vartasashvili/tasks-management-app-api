import { check } from 'express-validator'

const loginSchema = [
  check('email')
    .exists()
    .isEmail()
    .normalizeEmail()
    .withMessage('Please enter a valid email address.'),

  check('password').exists().trim().withMessage('Password is required.'),
]

export default loginSchema
