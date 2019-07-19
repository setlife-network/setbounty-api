import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { Prisma } from 'prisma-binding'
import { importSchema } from 'graphql-import'
import { makeExecutableSchema, mergeSchemas } from 'graphql-tools'
import bodyParser from 'body-parser'

import config from './config'
import resolvers from './resolvers'
import GithubREST from './services/GithubREST'
import GithubBinding from './services/GithubBinding'
import { githubSchema, transformedGithubSchema } from './services/githubSchema'
import { getGithubToken, getGithubUser } from './services/auth'

const typeDefs = importSchema('src/schema/app.graphql')

// ! may not need to merge since frontend isn't accessing raw Github API directly 
// const appSchema = makeExecutableSchema({ typeDefs })
// const schema = mergeSchemas({
//     schemas: [
//         githubSchema,
//         appSchema
//     ],
//     resolvers
// })

const app = express()

// passport stuff
// import passport from 'passport'
// import { Strategy as GithubStrategy } from 'passport-github'

// passport.use(new GithubStrategy(
//     {
//         clientID: config.github.clientID,
//         clientSecret: config.github.clientSecret,
//         callbackURL: 'http://localhost:4000/login/github/callback'
//     },
//     (token, refreshToken, profile, cb) => {
//         console.log(token)
//         return cb(null, profile)
//     }
// ))

// passport.serializeUser(function(user, cb) {
//     cb(null, user)
// })

// passport.deserializeUser(function(obj, cb) {
//     cb(null, obj)
// })

// app.use(passport.initialize())
app.use(bodyParser.json())

const db = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://localhost:4466',
    secret: config.jwtSecret
})

const server = new ApolloServer({
    typeDefs,
    resolvers,
    // schema,
    engine: {
        apiKey: process.env.ENGINE_API_KEY
    },
    dataSources: () => {
        return {
            github: new GithubREST(config.github.token)
        }
    },
    context: ({ req }) => {
        console.log(req.user.login)
        // TODO get user token from headers
        // TODO retrieve user with token
        // TODO throw error if no user
        // TODO add user to context
        return {
            ...req,
            db,
            github: new GithubBinding(config.github.token)
        }
    }
})

server.applyMiddleware({ app })

// app.get(
//     '/login/github', 
//     passport.authenticate('github', { session: false }, (err, user, info) => {
//         console.log(user)
//     }
// ))

// app.get('/login/github/callback',
//     passport.authenticate('github', { failureRedirect: '/' }),
//     (req, res) => {
//         res.redirect('/')
//     }
// )

app.get('/login/github', async (req, res, next) => {
    const { code } = req.query
    const token = await getGithubToken(code)
    const githubUser = await getGithubUser(token)
    req.user = githubUser

    // TODO check if user is in db
    let user = await db.query.user({ where: { login: githubUser.login }})
    if (!user) {
        console.log('no existing user')
        user = await db.mutation.createUser({
            data: {
                login: githubUser.login,
                name: githubUser.name
            }
        })
    }

    console.log(user)
    // res.send(user)
    next()
})

app.listen({ port: 4000 }, () => {
    console.log(`🚀  Server ready at http://localhost:4000${server.graphqlPath}`)
})