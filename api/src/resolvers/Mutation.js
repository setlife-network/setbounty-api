import { hash } from 'bcryptjs'
import jwt from 'jsonwebtoken'

const { JWT_SECRET, CLIENT_ID } = process.env

export async function signup(_, { username }, context, info) {
    // Github OAuth authentication
    const code = await context.dataSources.github.authorize()
    // create user in database
    // const user = await context.db.mutation.createUser({
    //     username,
    //     email
    // })

    // make a jwt
    const token = jwt.sign({ userId: user.id }, JWT_SECRET)

    return {
        token,
        user
    }
}