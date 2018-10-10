import jwt from 'jsonwebtoken'

export default function getUserId(context) {
    // retrieve Authorization header
    const Authorization = context.request.get('Authorization')
    const { JWT_SECRET } = process.env
    if (Authorization) {
        // trim 'Bearer ' from header
        const token = Authorization.replace('Bearer ', '')
        // verify jwt and retrieve user id
        const { userId } = jwt.verify(token, JWT_SECRET)
        return userId
    }

    throw new Error('Not authorized')
}