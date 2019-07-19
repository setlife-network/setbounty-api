import jwt from 'jsonwebtoken'
import { getPrismaUser } from '../services/auth'
import config from '../config'

export async function authenticate(parent, { login }, context) {
    let user = await getPrismaUser(context, login)

    if (!user) {
        console.log('no existing user')
        user = await context.db.mutation.createUser({
            data: {
                login: githubUser.login,
                name: githubUser.name
            }
        })
    }

    return {
        token: jwt.sign({ userId: user.id }, config.jwtSecret),
        user
    }
}

async function createBounty(parent, args, context, info) {
    const bounty = await context.db.mutation.createBounty({
        amount: args.amount,
        issueNumber: args.issueNumber,
        repository: args.repository,
        expirationDate: args.expirationDate
    })
}