import bcrypt from 'bcryptjs'

const user = 
  {
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10)
  }

export default user