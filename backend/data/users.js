import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Cip d',
        email: 'cip@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Salad Greens',
        email: 'salad@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users