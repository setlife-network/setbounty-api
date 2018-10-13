import jwt from 'jsonwebtoken'
import config from '../config'

export function getUserId(context) {
    // retrieve Authorization header
    const Authorization = context.request.get('Authorization')
    if (Authorization) {
        // trim 'Bearer ' from header
        const token = Authorization.replace('Bearer ', '')
        // verify jwt and retrieve user id
        const { userId } = jwt.verify(token, config.jwtSecret)
        return userId
    }

    throw new Error('Not authorized')
}