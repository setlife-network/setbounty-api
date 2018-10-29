import jwt from 'jsonwebtoken'
import { getToken, getUser } from '../services/github'
import config from '../config'

async function getPrismaUser(context, githubUserId) {
    return await context.db.query.user({ where: { githubUserId }})
}

export async function authenticate(_, { code }, context) {
    const githubToken = await getToken(code)
    const githubUser = await getUser(githubToken)

    let user = await getPrismaUser(context, githubUser.id)

    if (!user) {
        console.log('no existing user')
        user = await context.db.mutation.createUser({
            data: {
                githubUserId: githubUser.id,
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