import { check } from 'express-validator'

const signupSchema = [
  check('first_name')
    .exists()
    .trim()
    .withMessage('First name is required!')
    .isLength({ min: 3, max: 15 })
    .withMessage('First name should include at least 3 & max. 15 characters'),

  check('last_name')
    .exists()
    .trim()
    .withMessage('Last name is required!')
    .isLength({ min: 3, max: 40 })
    .withMessage('First name should include at least 3 & max. 40 characters'),

  check('email')
    .exists()
    .isEmail()
    .normalizeEmail()
    .withMessage('Please enter a valid email address.'),

  check('password')
    .exists()
    .trim()
    .withMessage('Password is required.')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 chars long'),

  check('password_confirmation')
    .exists()
    .trim()
    .withMessage('Password confirmation is required.')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Confirmation password doesn't match new password!")
      }
    }),
]

export default signupSchema
