import bcrypt from 'bcrypt'
import User from '../models/User.js'
import jwt from 'jsonwebtoken'

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

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user) {
      const error = new Error('A user with this email could not be found!')
      error.statusCode = 401
      throw error
    }

    const passwordsMatch = await bcrypt.compare(password, user.password)

    if (!passwordsMatch) {
      const error = new Error('Wrong password!')
      error.statusCode = 401
      throw error
    }

    const token = jwt.sign(
      {
        email: user.email,
        userId: user._id.toString(),
      },
      process.env.JWT_ACCESS_TOKEN,
      {
        expiresIn: '2h',
      }
    )

    res.status(200).json({
      token,
      user,
    })
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    next(error)
  }
}
