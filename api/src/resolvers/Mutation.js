import jwt from 'jsonwebtoken'
import { getPrismaUser, getToken, getUser } from '../services/auth'
import config from '../config'

export async function authenticate(_parent, { code }, context) {
    const githubToken = await getToken(code)
    const githubUser = await getUser(githubToken)

    let user = await getPrismaUser(context, githubUser.login)

    if (!user) {
        console.log('no existing user')
        user = await context.db.mutation.createUser({
            data: {
                username: githubUser.login,
                name: githubUser.name
            }
        })
    }

    return {
        token: jwt.sign({ userId: user.id }, config.jwtSecret),
        user
    }
}