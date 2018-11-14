import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { Prisma } from 'prisma-binding'
import { importSchema } from 'graphql-import'
import { makeExecutableSchema, mergeSchemas } from 'graphql-tools'

import config from './config'
import resolvers from './resolvers'
import GithubREST from './services/GithubREST'
import GithubBinding from './services/GithubBinding'
import { githubSchema, transformedGithubSchema } from './services/githubSchema'

const typeDefs = importSchema('src/schema/app.graphql')

// ! may not need to merge since frontend isn't accessing raw Github API directly 
const appSchema = makeExecutableSchema({ typeDefs })

// const schema = mergeSchemas({
//     schemas: [
//         githubSchema,
//         appSchema
//     ],
//     resolvers
// })

const app = express()

const server = new ApolloServer({
    typeDefs,
    resolvers,
    // schema,
    engine: {
        apiKey: process.env.ENGINE_API_KEY
    },
    // formatResponse(res) {
    //     console.log(res)
    //     return res
    // },
    dataSources: () => {
        return {
            github: new GithubREST()
        }
    },
    context: ({ req }) => {
        // TODO get user token from headers
        // TODO retrieve user with token
        // TODO throw error if no user
        // TODO add user to context
        return {
            ...req,
            db: new Prisma({
                typeDefs: 'src/generated/prisma.graphql',
                endpoint: 'http://localhost:4466',
                secret: config.jwtSecret
            }),
            github: new GithubBinding(config.github.token),
        }
    }
})

server.applyMiddleware({ app })

app.get('/authenticate', (req, res, next) => {
    console.log(req.query.code)
})

// server.listen({ port: 4000 }).then(({ url }) => {
//     console.log(`🚀  Server ready at ${url}`)
// })

app.listen({ port: 4000 }, () => {
    console.log(`🚀  Server ready at http://localhost:4000${server.graphqlPath}`)
})