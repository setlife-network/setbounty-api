import { ApolloServer } from 'apollo-server'
import { Prisma } from 'prisma-binding'
import { importSchema } from 'graphql-import'

import config from './config'
import GithubAPI from './services/GithubAPI'
import GithubBinding from './services/GithubBinding'

const isDev = process.env.NODE_ENV === 'development'

const favoriteRepos = [
    { owner: 'graphcool', name: 'graphql-yoga' },
    { owner: 'graphql', name: 'graphql-js' },
]

const typeDefs = importSchema('src/schema/app.graphql')

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query: {
            hello(parent, { name }, context, info) {
                return `Hello ${name || 'World'}`
            },
            favoriteRepos(parent, args, context, info) {
                return Promise.all(
                    favoriteRepos.map(args => context.github.query.repository(args, context, info))
                )
            }
        },
    },
    dataSources: () => {
        return {
            github: new GithubAPI()
        }
    },
    context: ({ req }) => {
        return {
            ...req,
            db: new Prisma({
                typeDefs: 'src/generated/prisma.graphql',
                endpoint: 'http://localhost:4466',
                secret: config.jwtSecret
            }),
            github: new GithubBinding(config.github.token)
        }
    }
})

server.listen({ port: 4000 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}graphql`)
})