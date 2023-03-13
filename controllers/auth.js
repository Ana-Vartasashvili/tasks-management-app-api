import bcrypt from 'bcrypt'
import User from '../models/User.js'

export const signup = async (req, res, next) => {
  try {
    const { email, password, first_name, last_name } = req.body

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(409).json({ message: 'User is already registered' })
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = new User({
      first_name,
      last_name,
      email,
      password: hashedPassword,
    })

    await user.save()

    res.status(201).json({ message: 'User created successfully.' })
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
      error.message = error._message
    }
    next(error)
  }
}
